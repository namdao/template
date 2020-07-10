import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import { ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const IconButton = ({ name, size, onPress, color, iconStyles }) => {
  return (
    <Icons
      name={name}
      size={size}
      onPress={onPress}
      color={color}
      style={[styles.iconDefault, iconStyles]}
      adjustsFontSizeToFit
    />
  );
};

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  onPress: PropTypes.func,
  iconStyles: PropTypes.oneOfType(PropTypes.arrayOf(ViewPropTypes.style), ViewPropTypes.style),
};
IconButton.defaultProps = {
  size: 25,
  color: 'white',
  onPress: null,
  iconStyles: {},
};
export default IconButton;
