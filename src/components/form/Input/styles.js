import { StyleSheet } from 'react-native';
import Colors from 'constant/colorConstant';
import { resWidth, resHeight, resFont, perWidth } from 'utils/screen';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.paleGrey2,
    borderRadius: resWidth(2),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: resHeight(10),
    paddingHorizontal: resWidth(15),
    width: perWidth(100),
  },
  input: {
    margin: 0,
    padding: 0,
    paddingTop: 0,
    fontSize: resFont(14),
    minHeight: resWidth(17),
    textAlignVertical: 'top',
    width: perWidth(100),
  },
  errorText: {
    color: Colors.red,
    fontSize: resFont(12),
    marginTop: resWidth(6),
    letterSpacing: 0.2,
    lineHeight: resWidth(16),
  },
});
