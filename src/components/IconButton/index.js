import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import { ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { doNothing } from 'utils/utility';
import styles from './styles';

const IconButton = ({ name, size, onPress, iconStyles }) => {
  return (
    <Icons name={name} size={size} onPress={onPress} style={[styles.iconDefault, iconStyles]} />
  );
};

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  onPress: PropTypes.func,
  iconStyles: ViewPropTypes.style,
};
IconButton.defaultProps = {
  size: 25,
  onPress: doNothing,
  iconStyles: {},
};
export default IconButton;
