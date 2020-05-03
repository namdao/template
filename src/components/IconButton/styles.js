import { StyleSheet } from 'react-native';
import Colors from 'constant/colorConstant';
import { resWidth } from 'utils/screen';

const styles = StyleSheet.create({
  iconDefault: {
    color: Colors.white,
    width: resWidth(100),
    paddingHorizontal: resWidth(10),
    paddingVertical: resWidth(5),
  },
});
export default styles;
