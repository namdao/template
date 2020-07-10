import { StyleSheet } from 'react-native';
import colors from 'constant/colors';
import { resFont, resWidth } from 'utils/screen';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: colors.mainAppColor,
    fontSize: resFont(16),
  },
  containerStyle: {
    padding: resWidth(15),
  },
  sectionContainerStyle: {
    margin: resWidth(3),
    borderRadius: resWidth(5),
    backgroundColor: colors.blueWater,
  },
});

export default styles;
