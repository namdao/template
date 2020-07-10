import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { doNothing } from 'utils/utility';
import { resWidth } from 'utils/screen';
import Colors from 'constant/colors';
import styles from './styles';

const CommonButton = ({
  colors,
  isFlat,
  disabled,
  title,
  onPress,
  isLoading,
  style,
  styleActivator,
  linearStyle,
  textStyle,
  borderRadius,
  children,
}) => {
  const toRenderItem = children || <Text style={[styles.buttonText, textStyle]}>{title}</Text>;

  const gradientButton = () => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, style]} disabled={disabled}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={disabled ? [Colors.gray, Colors.gray] : colors}
          style={[styles.linearGradient, { borderRadius }, linearStyle]}
        >
          {isLoading ? (
            <ActivityIndicator style={styleActivator} color="white" size="small" />
          ) : (
            toRenderItem
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const flatButton = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.flatButton, { borderRadius }, style]}
        disabled={disabled}
      >
        {isLoading ? (
          <ActivityIndicator style={styleActivator} color="white" size="small" />
        ) : (
          toRenderItem
        )}
      </TouchableOpacity>
    );
  };
  return !isFlat ? gradientButton() : flatButton();
};

CommonButton.propTypes = {
  disabled: PropTypes.bool,
  style: ViewPropTypes.style,
  styleActivator: ViewPropTypes.style,
  linearStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onPress: PropTypes.func,
  isLoading: PropTypes.bool,
  borderRadius: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  isFlat: PropTypes.bool,
};

CommonButton.defaultProps = {
  disabled: false,
  style: {},
  styleActivator: {},
  linearStyle: {},
  textStyle: {},
  title: 'Title Default',
  onPress: doNothing,
  isLoading: false,
  borderRadius: resWidth(5),
  colors: [Colors.main, Colors.main2],
  children: null,
  isFlat: true,
};

export default CommonButton;
