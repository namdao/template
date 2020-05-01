import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import { doNothing } from 'utils/utility';
import Colors from 'constant/colorConstant';
import styles from './styles';

const Input = ({
  errorVisible,
  input,
  meta: { touched, error },
  containerStyle,
  inputStyle,
  inputErrorStyle,
  errorTextStyle,
  renderRightComponent,
  renderLeftComponent,
  inputProps,
  formatOnBlur,
  onFocusCallback,
  onLayout,
}) => (
  <>
    <View onLayout={onLayout} style={[styles.container, containerStyle]}>
      {renderLeftComponent()}
      <TextInput
        style={[
          styles.input,
          error && touched ? { ...styles.errorBorder, ...inputErrorStyle } : null,
          inputStyle,
        ]}
        selectionColor={Colors.black}
        {...input}
        // TextInput only receive value type String
        value={input?.value ? `${input.value}` : ''}
        {...inputProps}
        onFocus={() => {
          input.onFocus();
          onFocusCallback();
        }}
        onBlur={() => input.onBlur(formatOnBlur(input.value))}
      />
      {renderRightComponent()}
    </View>
    {errorVisible && error && touched && (
      <Text style={[styles.errorText, errorTextStyle]}>{error}</Text>
    )}
  </>
);

Input.propTypes = {
  errorVisible: PropTypes.bool,
  formatOnBlur: PropTypes.func,
  input: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  required: PropTypes.bool,
  onFocusCallback: PropTypes.func,
  containerStyle: PropTypes.oneOfType(PropTypes.arrayOf(PropTypes.shape({}), PropTypes.shape({}))),
  inputStyle: PropTypes.shape({}),
  inputErrorStyle: PropTypes.shape({}),
  errorTextStyle: PropTypes.shape({}),
  inputProps: PropTypes.shape({}),
  renderRightComponent: PropTypes.func,
  renderLeftComponent: PropTypes.func,
  onLayout: PropTypes.func,
};

Input.defaultProps = {
  errorVisible: true,
  formatOnBlur: (value) => value,
  meta: {
    touched: false,
    error: '',
  },
  required: false,
  onFocusCallback: doNothing,
  containerStyle: [],
  inputStyle: null,
  inputErrorStyle: null,
  errorTextStyle: null,
  inputProps: null,
  renderRightComponent: doNothing,
  renderLeftComponent: doNothing,
  onLayout: doNothing,
};

export default Input;
