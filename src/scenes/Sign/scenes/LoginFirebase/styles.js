import { StyleSheet } from 'react-native';
import Colors from 'constant/colors';
import { resWidth } from 'utils/screen';

export default StyleSheet.create({
  container: {
    padding: resWidth(30),
  },
  input: {
    backgroundColor: Colors.mainBlue2,
    height: resWidth(50),
  },
});
