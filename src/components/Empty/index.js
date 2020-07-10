import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import LottieView from 'lottie-react-native';
import emptyBox from 'assets/animation/empty-box.json';
import BasedText from 'components/BasedText';
import { resFont } from 'utils/screen';
import colors from 'constant/colors';
import styles from './styles';

const EmptyBox = ({ text }) => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={styles.animation}
        source={emptyBox}
        loop
        speed={1}
        resizeMode="cover"
      />
      <BasedText size={resFont(14)} color={colors.brownGrey2}>
        {text}
      </BasedText>
    </View>
  );
};
EmptyBox.propTypes = {
  text: PropTypes.string,
};
EmptyBox.defaultProps = {
  text: '',
};
export default EmptyBox;
