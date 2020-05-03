import { StyleSheet } from 'react-native';
import Colors from 'constant/colorConstant';
import { resWidth } from 'utils/screen';

const styles = StyleSheet.create({
  showSearch: {
    backgroundColor: Colors.white50,
  },
  inputSearch: {
    flex: 1,
    paddingLeft: resWidth(5),
  },
});
export default styles;
