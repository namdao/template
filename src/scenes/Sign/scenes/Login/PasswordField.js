import React, { PureComponent } from 'react';
import { Field } from 'redux-form';
import { l10n } from 'languages';
import reduxFormConstants from 'scenes/Sign/constants/reduxFormConstants';
import Feather from 'react-native-vector-icons/Feather';
import Helper from 'scenes/Sign/helper/validate';
import Colors from 'constant/colorConstant';
import Input from 'components/form/Input';
import styles from './styles';

const { FORM_LOGIN } = reduxFormConstants;
const { FIELDS } = FORM_LOGIN;
export default class PasswordField extends PureComponent {
  state = {
    showPassword: false,
  };

  toggleShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  iconRight = () => {
    const { showPassword } = this.state;
    return (
      <Feather
        onPress={this.toggleShowPassword}
        name={!showPassword ? 'eye-off' : 'eye'}
        color={Colors.greyishBrown}
        size={20}
      />
    );
  };

  iconLeft = () => <Feather name="lock" color={Colors.tealishGreen} size={20} />;

  renderPasswordInput = (fieldProps) => {
    return (
      <Input
        containerStyle={[styles.inputContainer]}
        inputStyle={styles.inputField}
        renderRightComponent={this.iconRight}
        renderLeftComponent={this.iconLeft}
        errorTextStyle={styles.errorText}
        {...fieldProps}
      />
    );
  };

  render() {
    const { showPassword } = this.state;
    return (
      <Field
        inputProps={{
          placeholder: l10n.pass_placeholder,
          returnKeyType: 'done',
          secureTextEntry: !showPassword,
        }}
        name={FIELDS.PASSWORD}
        component={this.renderPasswordInput}
        validate={[Helper.requiredField, Helper.validPassword]}
      />
    );
  }
}
