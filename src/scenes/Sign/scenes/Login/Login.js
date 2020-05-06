import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import { resFont } from 'utils/screen';
import BasedText from 'components/BasedText';
import { l10n } from 'languages';
import Colors from 'constant/colors';
import KeyboardAware from 'components/KeyboardAware';
import FastImage from 'react-native-fast-image';
import Images from 'utils/images';
import CommonButton from 'components/CommonButton';
import { doNothing } from 'utils/utility';
import styles from './styles';
/**
 *  Component
 */
import EmailField from './component/EmailField';
import PasswordField from './component/PasswordField';

export default class Login extends PureComponent {
  static propTypes = {
    requestLogin: PropTypes.func,
    handleSubmit: PropTypes.func,
  };

  static defaultProps = {
    requestLogin: doNothing,
    handleSubmit: doNothing,
  };

  onSubmit = () => {
    const { requestLogin } = this.props;
    requestLogin();
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Container style={styles.container} forceInset={{ bottom: 'never' }}>
        <View style={styles.halftTop}>
          <FastImage source={Images.mainLogo} resizeMode="cover" style={styles.mainLogo} />
          <View style={styles.space10} />
          <BasedText size={resFont(30)} weight="600" color={Colors.white}>
            {l10n.well_come}
          </BasedText>
        </View>
        <View style={styles.space30} />
        <Animatable.View animation="fadeInUpBig" style={styles.halftBottom}>
          <KeyboardAware>
            <ScrollView keyboardShouldPersistTaps="handled">
              <EmailField />
              <View style={styles.space10} />
              <PasswordField />
              <View style={styles.space30} />
              <CommonButton onPress={handleSubmit(this.onSubmit)} title={l10n.sign_in} />
            </ScrollView>
          </KeyboardAware>
        </Animatable.View>
      </Container>
    );
  }
}
