import { StyleSheet } from 'react-native';
import Colors from 'constant/colorConstant';
import Common from 'constant/commonStyles';
import { resWidth } from 'utils/screen';

const { flex1, alignStart, justifyEnd } = Common;

export default StyleSheet.create({
  container: {
    ...flex1,
    backgroundColor: Colors.primary,
  },
  halftTop: {
    flex: 1,
    ...alignStart,
    ...justifyEnd,
    paddingHorizontal: resWidth(20),
    backgroundColor: Colors.primary,
  },
  space30: {
    paddingVertical: resWidth(30),
  },
  halftBottom: {
    flex: 4,
    backgroundColor: Colors.white,
    borderTopLeftRadius: resWidth(40),
    borderTopRightRadius: resWidth(40),
    paddingHorizontal: resWidth(20),
  },
});
