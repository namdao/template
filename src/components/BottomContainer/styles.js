import { StyleSheet } from 'react-native';
import Colors from 'constant/colors';
import { resHeight, perWidth, perHeight } from 'utils/screen';

import Common from 'constant/commonStyles';

const { justifyStart } = Common;

const styles = StyleSheet.create({
  bottomContainer: {
    ...justifyStart,
    backgroundColor: Colors.white,
    height: resHeight(200),
  },
  bgTransparent: {
    width: perWidth(100),
    height: perHeight(100),
    position: 'absolute',
    zIndex: 2,
  },
});

export default styles;
