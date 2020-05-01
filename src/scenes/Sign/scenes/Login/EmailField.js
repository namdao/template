import React from 'react';
import { Field } from 'redux-form';
import { l10n } from 'languages';
import reduxFormConstants from 'scenes/Sign/constants/reduxFormConstants';
import Feather from 'react-native-vector-icons/Feather';
import Helper from 'scenes/Sign/helper/validate';
import Input from 'components/form/Input';
import Colors from 'constant/colorConstant';
import * as Animatable from 'react-native-animatable';

import styles from './styles';

const { FORM_LOGIN } = reduxFormConstants;
const { FIELDS } = FORM_LOGIN;
export default class EmailField extends React.Component {
  iconLeft = () => {
    return <Feather name="user" color={Colors.tealishGreen} size={20} />;
  };

  iconRight = ({ meta: { error, touched } }) => {
    if (!touched) return null;
    return (
      <Animatable.View animation="bounceIn">
        <Feather
          name="check-circle"
          color={touched && error ? Colors.greyishBrown : Colors.tealishGreen}
          size={20}
        />
      </Animatable.View>
    );
  };

  renderEmailInput = (fieldProps) => {
    return (
      <Input
        containerStyle={[styles.inputContainer]}
        inputStyle={styles.inputField}
        renderRightComponent={() => this.iconRight(fieldProps)}
        renderLeftComponent={this.iconLeft}
        errorTextStyle={styles.errorText}
        {...fieldProps}
      />
    );
  };

  render() {
    return (
      <Field
        errorVisible
        inputProps={{
          placeholder: l10n.email_placeholder,
          returnKeyType: 'next',
          keyboardType: 'email-address',
          autoCorrect: false,
        }}
        name={FIELDS.IDENTIFY}
        component={this.renderEmailInput}
        validate={[Helper.requiredField, Helper.validEmailUser]}
      />
    );
  }
}
