import React, { PureComponent } from 'react';
import { TouchableOpacity, Animated, ViewPropTypes } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as PropTypes from 'prop-types';
import { doNothing } from 'utils/utility';
import colorConstant from 'constant/colors';
import styles from './styles';

class AnimationCard extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    backgroundGradient: PropTypes.arrayOf(PropTypes.string),
    delay: PropTypes.number,
    duration: PropTypes.number.isRequired,
    isHorizontal: PropTypes.bool,
    animateStyle: ViewPropTypes.style,
    actionStyle: ViewPropTypes.style,
    opacity: PropTypes.number,
    gradientStyle: ViewPropTypes.style,
    children: PropTypes.node,
  };

  static defaultProps = {
    onPress: doNothing,
    backgroundGradient: [colorConstant.main, colorConstant.main2],
    isHorizontal: false,
    children: null,
    animateStyle: {},
    opacity: 0.2,
    delay: 0,
    gradientStyle: {},
    actionStyle: {},
  };

  constructor(props) {
    super(props);
    this.animated = new Animated.Value(0);
  }

  componentDidMount() {
    const { delay, duration } = this.props;
    if (delay < 0) {
      Animated.timing(this.animated, {
        toValue: 1,
        duration,
        delay,
        useNativeDriver: true,
      }).start();
    } else {
      this.animated.setValue(1);
    }
  }

  animateSettings = () => {
    const { isHorizontal } = this.props;
    let transform = {
      translateY: this.animated.interpolate({
        inputRange: [0, 1],
        outputRange: [500, 1],
      }),
    };
    if (isHorizontal) {
      transform = {
        translateX: this.animated.interpolate({
          inputRange: [0, 1],
          outputRange: [500, 1],
        }),
      };
    }
    return transform;
  };

  render() {
    const {
      onPress,
      backgroundGradient,
      children,
      animateStyle,
      actionStyle,
      gradientStyle,
      opacity,
    } = this.props;
    const animateSetting = this.animateSettings();
    const rowStyles = [
      { opacity: this.animated },
      {
        transform: [animateSetting],
      },
    ];

    return (
      <Animated.View style={[animateStyle, rowStyles]}>
        <TouchableOpacity
          activeOpacity={opacity}
          style={[styles.container, actionStyle]}
          onPress={onPress}
        >
          {backgroundGradient.length > 0 ? (
            <LinearGradient
              colors={backgroundGradient}
              style={[styles.containerItem, gradientStyle]}
            >
              {children}
            </LinearGradient>
          ) : (
            children
          )}
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

export default AnimationCard;
