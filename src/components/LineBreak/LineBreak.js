import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import styles from './styles';

const LineBreak = ({ style }) => <View style={[styles.line, style]} />;

LineBreak.propTypes = {
  style: ViewPropTypes.style,
};

LineBreak.defaultProps = {
  style: {},
};

export default LineBreak;
