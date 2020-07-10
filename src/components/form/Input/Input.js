import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import { doNothing } from 'utils/utility';
import Colors from 'constant/colors';
import styles from './styles';

const Input = ({
  errorVisible,
  name,
  touched,
  errors,
  containerStyle,
  inputStyle,
  inputErrorStyle,
  errorTextStyle,
  renderRightComponent,
  renderLeftComponent,
  handleChange,
  handleBlur,
  // formatOnBlur,
  onFocusCallback,
  onLayout,
  inputProps,
}) => {
  return (
    <>
      <View onLayout={onLayout} style={[styles.container, containerStyle]}>
        {renderLeftComponent()}
        <TextInput
          style={[
            styles.input,
            errors[name] && touched[name] ? { ...styles.errorBorder, ...inputErrorStyle } : null,
            inputStyle,
          ]}
          autoCorrect={false}
          selectionColor={Colors.black}
          onChangeText={handleChange(name)}
          onFocus={() => {
            // input.onFocus();
            onFocusCallback();
          }}
          // value={values[name]}
          {...inputProps}
          onBlur={handleBlur(name)}
        />
        {renderRightComponent()}
      </View>
      {errorVisible && errors[name] && touched[name] && (
        <Text style={[styles.errorText, errorTextStyle]}>{errors[name]}</Text>
      )}
    </>
  );
};

Input.propTypes = {
  errorVisible: PropTypes.bool,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  // formatOnBlur: PropTypes.func,
  touched: PropTypes.shape({}),
  errors: PropTypes.shape({}),
  onFocusCallback: PropTypes.func,
  containerStyle: PropTypes.oneOfType(PropTypes.arrayOf(PropTypes.shape({}), PropTypes.shape({}))),
  inputStyle: PropTypes.shape({}),
  inputErrorStyle: PropTypes.shape({}),
  errorTextStyle: PropTypes.shape({}),
  renderRightComponent: PropTypes.func,
  renderLeftComponent: PropTypes.func,
  inputProps: PropTypes.shape({}),
  onLayout: PropTypes.func,
};

Input.defaultProps = {
  errorVisible: true,
  // formatOnBlur: (value) => value,
  touched: PropTypes.shape({}),
  errors: {},
  onFocusCallback: doNothing,
  containerStyle: [],
  inputStyle: null,
  inputErrorStyle: null,
  errorTextStyle: null,
  renderRightComponent: doNothing,
  renderLeftComponent: doNothing,
  onLayout: doNothing,
  inputProps: {},
};

export default Input;
