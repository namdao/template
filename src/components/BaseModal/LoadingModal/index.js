import React from 'react';
import { View, Modal } from 'react-native';
import PropTypes from 'prop-types';
import LottieView from 'lottie-react-native';
import animateLoading from 'assets/animation/loadingModal.json';
import styles from './styles';

const loadingModal = ({ isVisible }) => {
  return (
    <Modal animated animationType="fade" transparent visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.viewTop}>
          <LottieView
            autoPlay
            style={styles.animation}
            source={animateLoading}
            loop
            speed={1}
            resizeMode="cover"
          />
        </View>
      </View>
    </Modal>
  );
};
loadingModal.propTypes = {
  isVisible: PropTypes.bool,
};
loadingModal.defaultProps = {
  isVisible: false,
};
export default loadingModal;
