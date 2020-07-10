import React from 'react';
import PropTypes from 'prop-types';
import { l10n } from 'languages';
import FormConstants from 'scenes/Sign/constants/formConstants';
import Feather from 'react-native-vector-icons/Feather';
import Input from 'components/form/Input';
import Colors from 'constant/colors';
import * as Animatable from 'react-native-animatable';

import styles from '../styles';

const { FORM_LOGIN } = FormConstants;
const { FIELDS } = FORM_LOGIN;
class EmailField extends React.PureComponent {
  iconLeft = () => {
    return <Feather name="user" color={Colors.tealishGreen} size={20} />;
  };

  iconRight = () => {
    const { errors, touched } = this.props;
    if (!touched[FIELDS.IDENTITY]) return null;
    return (
      <Animatable.View animation="bounceIn">
        <Feather
          name="check-circle"
          color={
            touched[FIELDS.IDENTITY] && errors[FIELDS.IDENTITY]
              ? Colors.greyishBrown
              : Colors.tealishGreen
          }
          size={20}
        />
      </Animatable.View>
    );
  };

  render() {
    return (
      <Input
        containerStyle={[styles.inputContainer]}
        inputStyle={styles.inputField}
        renderRightComponent={this.iconRight}
        renderLeftComponent={this.iconLeft}
        name={FIELDS.IDENTITY}
        inputProps={{
          placeholder: l10n.email_placeholder,
          returnKeyType: 'next',
          keyboardType: 'email-address',
          autoCorrect: false,
          autoCapitalize: 'none',
          autoCompleteType: 'email',
        }}
        {...this.props}
      />
    );
  }
}
EmailField.propTypes = {
  errors: PropTypes.shape({}),
  touched: PropTypes.shape({}),
};
EmailField.defaultProps = {
  errors: {},
  touched: {},
};
export default EmailField;
