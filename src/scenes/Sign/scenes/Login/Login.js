import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import { resFont } from 'utils/screen';
import BasedText from 'components/BasedText';
import { l10n } from 'languages';
import Colors from 'constant/colors';
import FormConstants from 'scenes/Sign/constants/formConstants';
import KeyboardAware from 'components/KeyboardAware';
import FastImage from 'react-native-fast-image';
import Images from 'utils/images';
import CommonButton from 'components/CommonButton';
import { doNothing } from 'utils/utility';
import helper from 'scenes/Sign/helper/validate';
import Form from 'components/form/Form';
import Spacing from 'components/Spacing';
import styles from './styles';
/**
 *  Component
 */
import EmailField from './component/EmailField';
import PasswordField from './component/PasswordField';

const { FORM_LOGIN } = FormConstants;
const { FIELDS } = FORM_LOGIN;
const VALUES_DEFAULTS = {
  [FIELDS.IDENTITY]: '',
  [FIELDS.PASSWORD]: '',
};
export default class Login extends PureComponent {
  static propTypes = {
    requestLogin: PropTypes.func,
    handleSubmit: PropTypes.func,
  };

  static defaultProps = {
    requestLogin: doNothing,
    handleSubmit: doNothing,
  };

  refForm = React.createRef();

  onSubmit = (values, actions) => {
    const { requestLogin } = this.props;
    requestLogin({ values, actions });
  };

  render() {
    return (
      <Container style={styles.container} forceInset={{ bottom: 'never' }}>
        <View style={styles.halftTop}>
          <FastImage source={Images.imageLogo} resizeMode="cover" style={styles.mainLogo} />
          <Spacing />
          <BasedText size={resFont(30)} weight="600" color={Colors.white}>
            {l10n.well_come}
          </BasedText>
        </View>
        <Spacing height={20} />
        <Animatable.View animation="fadeInUpBig" style={styles.halftBottom}>
          <KeyboardAware>
            {(isKeyboardVisible) => (
              <Form
                ref={this.refForm}
                validationSchema={helper.onValidLogin}
                onSubmit={this.onSubmit}
                initialValues={VALUES_DEFAULTS}
              >
                {(propsForm) => (
                  <ScrollView keyboardShouldPersistTaps="handled">
                    <EmailField {...propsForm} />
                    <Spacing />
                    <PasswordField {...propsForm} />
                    <Spacing height={30} />
                    {!isKeyboardVisible && (
                      <CommonButton
                        isLoading={propsForm.isSubmitting}
                        onPress={propsForm.handleSubmit}
                        title={l10n.sign_in}
                      />
                    )}
                  </ScrollView>
                )}
              </Form>
            )}
          </KeyboardAware>
        </Animatable.View>
      </Container>
    );
  }
}
