import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { resWidth } from 'utils/screen';
import styles from './styles';

const Spacing = ({ width, height }) => {
  return <View style={[styles.spacing, { width, height }]} />;
};
Spacing.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};
Spacing.defaultProps = {
  height: resWidth(15),
  width: 0,
};
export default Spacing;
