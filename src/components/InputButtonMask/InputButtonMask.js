import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

/**
 * the use case of this component is to fake input as a button as you dont want to restyle a touchable look like an input
 * then just wrap the input with button overlay
 */
const InputButtonMask = ({ children, onPress }) => {
  const onPressMask = () => {
    return onPress?.();
  };
  return (
    <View>
      <TouchableOpacity onPress={onPressMask} style={styles.overlap} />
      {children}
    </View>
  );
};

InputButtonMask.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default InputButtonMask;
