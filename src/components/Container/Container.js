import React from 'react';
import { ViewPropTypes } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import PropType from 'prop-types';

const Container = ({ children, style, ...rest }) => {
  return (
    <SafeAreaView style={style} {...rest}>
      {children}
    </SafeAreaView>
  );
};
Container.propTypes = {
  children: PropType.node,
  style: ViewPropTypes.style,
};
Container.defaultProps = {
  children: null,
  style: {},
};
export default Container;
