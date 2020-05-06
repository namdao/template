import { StyleSheet } from 'react-native';
import Colors from 'constant/colors';
import { resWidth } from 'utils/screen';

const styles = StyleSheet.create({
  showSearch: {
    backgroundColor: Colors.white,
  },
  inputSearch: {
    flex: 1,
    paddingLeft: resWidth(5),
  },
  iconSearch: {
    color: Colors.lightSalmon,
  },
});
export default styles;
