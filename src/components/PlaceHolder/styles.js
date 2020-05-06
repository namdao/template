import { StyleSheet } from 'react-native';
import Colors from 'constant/colors';
import { resWidth } from 'utils/screen';
import Common, { ObjectStyles } from 'constant/commonStyles';

const { flex1, flexDirectionRow, spaceBetween, justifyStart, justifyEnd } = Common;
const styles = StyleSheet.create({
  container: {
    padding: resWidth(10),
  },
  cardContainer: {
    backgroundColor: Colors.whiteSmoke,
    borderRadius: resWidth(5),
    padding: resWidth(10),
    ...justifyStart,
    ...ObjectStyles.itemShadow,
  },
  itemHead: {
    ...flexDirectionRow,
    ...spaceBetween,
  },
  row: {
    ...flexDirectionRow,
  },
  rowRight: {
    ...flex1,
    ...flexDirectionRow,
    ...justifyEnd,
  },
  rowLeft: {
    ...flex1,
    ...flexDirectionRow,
    ...justifyStart,
  },
  ml10: {
    marginLeft: resWidth(10),
  },
});
export default styles;
