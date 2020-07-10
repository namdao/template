import { StyleSheet } from 'react-native';
import Colors from 'constant/colors';
import Common from 'constant/commonStyles';
import { resWidth } from 'utils/screen';

const { flex1, alignStart, justifyEnd, alignSeftCenter } = Common;

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
  mainLogo: {
    width: resWidth(100),
    height: resWidth(100),
    borderRadius: resWidth(20),
    ...alignSeftCenter,
  },
  halftBottom: {
    flex: 2,
    backgroundColor: Colors.white,
    paddingVertical: resWidth(30),
    borderTopLeftRadius: resWidth(40),
    borderTopRightRadius: resWidth(40),
    paddingHorizontal: resWidth(20),
  },
  inputContainer: {
    backgroundColor: Colors.transparent,
    paddingVertical: resWidth(8),
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.silverGrey,
  },
  inputField: {
    flex: 1,
    marginHorizontal: resWidth(8),
  },
  lineBreak: {
    borderBottomColor: Colors.silverGrey,
    marginHorizontal: resWidth(15),
  },
});
