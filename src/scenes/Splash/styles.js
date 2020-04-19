import { StyleSheet, Dimensions } from 'react-native';

export const getWidth = () => Dimensions.get('window').width;
export const getHeight = () => Dimensions.get('window').height;
const styles = StyleSheet.create({
  halfViewTop: {
    flex: 1,
    justifyContent: 'center',
  },
  animateSplash: {
    width: getWidth() / 2,
    height: getHeight() / 4,
  },
  imageLogo: {
    top: -50,
    height: getHeight() / 6,
    justifyContent: 'center',
    width: getWidth(),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: getWidth(),
  },
});
export default styles;
