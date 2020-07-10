import React from 'react';
import {
  Alert,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import Constants from 'constant/appConstant';
import SetupAxios from 'manager/axiosManager';
import { setLanguage } from 'languages';
import Platform from 'utils/platform';
import styles from './styles';

class AppKeeper extends React.Component {
  constructor(props) {
    super(props);
    const { baseUrl, updateServerBaseUrl, locale } = props;
    let showServerBoard = !baseUrl;
    /**
     * initial axios
     */
    SetupAxios.init();
    /**
     * if have initial base url. Set its
     */
    const newBaseUrl = SetupAxios.setBaseUrl(baseUrl);
    /** sync baseUrl in reducer with axios baseUrl */
    baseUrl !== newBaseUrl && updateServerBaseUrl(newBaseUrl);
    setLanguage(locale);
    if (Platform.isProduction) {
      showServerBoard = false;
    }
    this.state = {
      serverPath: baseUrl,
      showServerBoard,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state) return true;
    const { baseUrl: nextBaseUrl } = nextProps;
    const { baseUrl } = this.props;
    if (baseUrl !== nextBaseUrl) return true;
    return false;
  }

  componentDidUpdate(prevProps) {
    const { baseUrl: prevBaseUrl } = prevProps;
    const { baseUrl } = this.props;
    if (baseUrl !== prevBaseUrl) {
      const { showServerBoard } = this.state;
      if (!showServerBoard && baseUrl == null) {
        this.setState({ showServerBoard: true, serverPath: '' });
      }
    }
  }

  onPressConfirmButton = () => {
    const { baseUrl, updateServerBaseUrl } = this.props;
    const { serverPath } = this.state;

    if (!serverPath) {
      Alert.alert('Chọn server trước đê', 'người anh em quên chọn server rồi kìa');
      return;
    }

    const newBaseUrl = SetupAxios.setBaseUrl(serverPath);
    /** sync baseUrl in reducer with axios baseUrl */
    baseUrl !== newBaseUrl && updateServerBaseUrl(newBaseUrl);

    // await frame();
    this.setState({ showServerBoard: false });
  };

  ConfirmButton = () => {
    return (
      <TouchableOpacity style={styles.confirmBtn} onPress={this.onPressConfirmButton}>
        <Text style={styles.textNormal}>Chọn</Text>
      </TouchableOpacity>
    );
  };

  onPressServerItem = (item) => {
    this.setState({ serverPath: item });
  };

  renderStaticServer = (name, url) => {
    return (
      <TouchableOpacity style={styles.buttonServer} onPress={() => this.onPressServerItem(url)}>
        <Text style={styles.btnTxt}>{name}</Text>
      </TouchableOpacity>
    );
  };

  renderServerBoard() {
    const { serverPath } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={this.onPressOutsidePRInput}>
          <View pointerEvents="box-none" style={styles.boardBox}>
            <Text style={styles.title}>Server:{serverPath}</Text>
            <View style={styles.contentBox}>
              {this.renderStaticServer('PRODUCTION', Constants.URL_PRODUCTION)}
              {this.renderStaticServer('DEVELOP', Constants.URL_DEVELOP)}
            </View>
            <this.ConfirmButton />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }

  render() {
    const { showServerBoard } = this.state;
    if (showServerBoard) return this.renderServerBoard();
    const { children } = this.props;
    return children;
  }
}

AppKeeper.propTypes = {
  children: PropTypes.node,
  updateServerBaseUrl: PropTypes.func.isRequired,
  locale: PropTypes.string,
  baseUrl: PropTypes.string,
};

AppKeeper.defaultProps = {
  children: null,
  baseUrl: '',
  locale: 'vi',
};

export default AppKeeper;
