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
  space10: {
    paddingVertical: resWidth(10),
  },
  halftBottom: {
    flex: 3,
    backgroundColor: Colors.white,
    paddingVertical: resWidth(30),
    borderTopLeftRadius: resWidth(40),
    borderTopRightRadius: resWidth(40),
    paddingHorizontal: resWidth(20),
  },
  inputContainer: {
    paddingVertical: resWidth(5),
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.silverGrey,
  },
  inputField: {
    flex: 1,
    marginHorizontal: resWidth(5),
  },
  lineBreak: {
    borderBottomColor: Colors.silverGrey,
    marginHorizontal: resWidth(15),
  },
});
