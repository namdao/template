import { StyleSheet } from 'react-native';
import Colors from 'constant/colors';
import { resWidth } from 'utils/screen';

const styles = StyleSheet.create({
  iconDefault: {
    color: Colors.white,
    paddingHorizontal: resWidth(10),
    paddingVertical: resWidth(5),
  },
});
export default styles;
