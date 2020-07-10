import React, { PureComponent } from 'react';
import { l10n } from 'languages';
import FormConstants from 'scenes/Sign/constants/formConstants';
import Feather from 'react-native-vector-icons/Feather';
import Colors from 'constant/colors';
import Input from 'components/form/Input';
import styles from '../styles';

const { FORM_LOGIN } = FormConstants;
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

  render() {
    const { showPassword } = this.state;
    return (
      <Input
        containerStyle={[styles.inputContainer]}
        inputStyle={styles.inputField}
        renderRightComponent={this.iconRight}
        renderLeftComponent={this.iconLeft}
        name={FIELDS.PASSWORD}
        inputProps={{
          placeholder: l10n.pass_placeholder,
          returnKeyType: 'done',
          secureTextEntry: !showPassword,
        }}
        {...this.props}
      />
    );
  }
}
