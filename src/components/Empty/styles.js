import { StyleSheet } from 'react-native';
import { resWidth, perHeight } from 'utils/screen';

import Common from 'constant/commonStyles';

const { flex1, justifyCenter, alignCenter } = Common;

const styles = StyleSheet.create({
  container: {
    ...flex1,
    ...alignCenter,
    ...justifyCenter,
    height: perHeight(70),
  },
  animation: {
    width: resWidth(200),
    height: resWidth(200),
  },
});

export default styles;
