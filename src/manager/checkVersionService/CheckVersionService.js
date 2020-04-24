import React, { Component } from 'react';
import { View, Platform, Text, Linking } from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';
import CodePush from 'react-native-code-push';
import FastImage from 'react-native-fast-image';
// import { l10n } from 'languages';
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';
import CommonButton from 'components/CommonButton';
import Images from 'utils/images';
/**
 * internal imports
 */
import styles from './styles';
import { UPDATE_MODE } from './constants';
import DescriptionContent from './DescriptionContent';

const initState = {
  isVisible: false,
  updateMode: UPDATE_MODE.NONE,
  codePushDescription: '',
  currentProgress: 0,
  statusProcess: '',
  isUpdate: false,
};

class VersionManager extends Component {
  static propTypes = {
    appState: PropTypes.string,
  };

  static defaultProps = {
    appState: 'active',
  };

  constructor(props) {
    super(props);
    this.backendVersionData = {};
    this.statusProcess = '';
    this.state = initState;
    this.isShow = false;
    this.animateView = null;
  }

  UNSAFE_componentWillMount() {
    CodePush.disallowRestart();
  }

  componentDidMount() {
    CodePush.allowRestart();
    this.checkStoreVersion();
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const { appState } = this.props;
    if (
      nextProps.appState !== appState &&
      (appState === 'background' || appState === 'inactive') &&
      nextProps.appState === 'active'
    ) {
      this.checkStoreVersion();
    }
  };

  checkStoreVersion = async () => {
    // const response = await VersionApi.getMobileVersion();
    // this.backendVersionData = response;
    // const currentVersion = semver.coerce(Constants.CODE_BUNDLE_ID);
    // const { raw: currentRawVersion } = currentVersion;
    // const { ios_version, android_version } = response;
    // const storeVersion = Platform.OS === 'ios' ? ios_version : android_version;
    // const checkResult = checkShouldUpdate(currentRawVersion, storeVersion);
    // if (checkResult === UPDATE_MODE.STORE) {
    //   this.showUpdate();
    //   return this.setState({ updateMode: checkResult });
    // }
    return this.checkCodePush();
  };

  checkCodePush = async () => {
    try {
      console.log('------- CodePush check for Update -------');
      const update = await CodePush.checkForUpdate();
      if (!update) {
        console.log('------- CodePush have no Update -------');
        return;
      }
      console.log('------- CodePush have a Update -------');
      const { isMandatory } = update;
      this.showUpdate();
      if (isMandatory) {
        this.showUpdate();
        const { description } = update || '';
        this.setState({
          codePushDescription: description,
          updateMode: UPDATE_MODE.CODE_PUSH,
        });
      } else {
        CodePush.sync({
          installMode: CodePush.InstallMode.ON_NEXT_RESUME,
          checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
        });
      }
    } catch (error) {
      console.warn('CodePush.checkForUpdateError', error);
    }
  };

  codePushStatusDidChange(syncStatus) {
    console.log('------- CodePush codePushStatusDidChange -------');
    let { statusProcess } = this.state;
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log('CHECKING_FOR_UPDATE');
        statusProcess = 'Kiểm tra bản cập nhật';
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log('DOWNLOADING_PACKAGE');
        statusProcess = 'Đang tải';
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        console.log('AWAITING_USER_ACTION');
        statusProcess = 'Chờ hành động';
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        console.log('INSTALLING_UPDATE');
        statusProcess = 'Đang cài đặt bản cập nhật';
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        console.log('UP_TO_DATE');
        statusProcess = 'Đã cập nhật bản mới nhất';
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        console.log('UPDATE_INSTALLED');
        statusProcess = 'Cập nhật hoàn tất';
        break;
      case CodePush.SyncStatus.SYNC_IN_PROGRESS:
        console.log('SYNC_IN_PROGRESS');
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        console.log('UNKNOWN_ERROR');
        break;
      default:
        break;
    }
    this.setState({ statusProcess });
  }

  codePushDownloadDidProgress(progress) {
    console.log('------- CodePush codePushDownloadDidProgress -------');
    const { receivedBytes, totalBytes } = progress;
    const temp = receivedBytes / totalBytes;
    this.setState({ currentProgress: temp }, () => {
      if (temp >= 1) {
        this.hideUpdate();
      }
    });
  }

  onPressUpdateNow = () => {
    const { updateMode } = this.state;
    const { ios_url, android_url } = this.backendVersionData || {};
    if (updateMode === UPDATE_MODE.STORE) {
      Linking.openURL(Platform.OS === 'ios' ? ios_url : android_url);
    }
    if (updateMode === UPDATE_MODE.CODE_PUSH) {
      this.setState({ isUpdate: true }, () => {
        const codePushOptions = {
          installMode: CodePush.InstallMode.ON_NEXT_RESTART,
          mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
        };
        CodePush.sync(
          codePushOptions,
          this.codePushStatusDidChange.bind(this),
          this.codePushDownloadDidProgress.bind(this)
        ).catch((error) => {
          console.warn('CodePush.syncError', error);
        });
      });
    }
  };

  showUpdate = () => {
    if (this.isShow) return;
    this.isShow = true;
    this.animateView && this.animateView.fadeInUp();
  };

  hideUpdate = () => {
    if (!this.isShow) return;
    this.isShow = false;
    this.animateView && this.animateView.fadeOutDown();
  };

  renderBottomButton = () => {
    const { updateMode, currentProgress, statusProcess, isUpdate } = this.state;
    if (updateMode === UPDATE_MODE.NONE) {
      return null;
    }
    const roundedValue = (currentProgress * 100).toFixed(2);
    const progress = `${roundedValue}%`;
    if (isUpdate) {
      return (
        <>
          <Progress.Circle
            progress={roundedValue}
            showsText
            formatText={() => progress}
            containerStyle={styles.updateNowButton}
          />
          <Text>{statusProcess}</Text>
        </>
      );
    }
    return (
      <CommonButton
        title="Cập nhật"
        style={styles.updateNowButton}
        onPress={this.onPressUpdateNow}
      />
    );
  };

  setAnimateView = (ref) => {
    this.animateView = ref;
  };

  render() {
    const { updateMode, codePushDescription } = this.state;
    return (
      <AnimatableView ref={this.setAnimateView} style={styles.container} useNativeDriver>
        <FastImage
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
          source={Images.imgForceUpdate}
        />
        <View style={styles.contentWrapper}>
          <DescriptionContent updateMode={updateMode} codePushDescription={codePushDescription} />
          {this.renderBottomButton()}
        </View>
      </AnimatableView>
    );
  }
}

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  updateDialog: undefined,
};

export default CodePush(codePushOptions)(VersionManager);
