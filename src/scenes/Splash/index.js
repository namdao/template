import React, { Component } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import loading from 'assets/animation/loading.json';
import LOGO from 'assets/images/main-light-logo.png';
import FastImage from 'react-native-fast-image';
import styles from './styles';

class Splash extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <FastImage resizeMode="contain" style={styles.imageLogo} source={LOGO} />
        <LottieView
          ref={(animation) => {
            this.animation = animation;
          }}
          style={styles.animateSplash}
          source={loading}
          loop
          speed={1}
          resizeMode="cover"
        />
      </View>
    );
  }
}
export default Splash;
