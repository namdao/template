import React from 'react';
import PropTypes from 'prop-types';
import { Text, ViewPropTypes } from 'react-native';

const BasedText = ({ children, style, color, size, weight, textAlign, lineHeight, ...rest }) => (
  <Text
    allowFontScaling={false}
    style={[{ color, fontSize: size, fontWeight: weight, textAlign, lineHeight }, style]}
    {...rest}
  >
    {children}
  </Text>
);

BasedText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  weight: PropTypes.string,
  textAlign: PropTypes.string,
  lineHeight: PropTypes.number,
  style: PropTypes.oneOf(ViewPropTypes.style, PropTypes.any),
};

BasedText.defaultProps = {
  color: null,
  size: null,
  weight: null,
  textAlign: 'auto',
  lineHeight: undefined,
  style: {},
};

export default BasedText;
