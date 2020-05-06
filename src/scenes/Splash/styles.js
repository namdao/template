import { StyleSheet } from 'react-native';
import Screen, { resWidth } from 'utils/screen';
import Colors from 'constant/colors';
import commonStyle from 'constant/commonStyles';

const { width, height } = Screen;
const styles = StyleSheet.create({
  halfViewTop: {
    ...commonStyle.flex1,
    ...commonStyle.justifyCenter,
  },
  animateSplash: {
    width: width / 2,
    height: height / 2,
  },
  imageLogo: {
    top: resWidth(-50),
    height: height / 6,
    width,
    ...commonStyle.justifyCenter,
  },
  container: {
    width,
    backgroundColor: Colors.polo_blue,
    ...commonStyle.justifyCenter,
    ...commonStyle.alignCenter,
    ...commonStyle.flex1,
  },
});
export default styles;
