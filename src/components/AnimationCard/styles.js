import { StyleSheet } from 'react-native';
import { resWidth } from 'utils/screen';
import CommonStyles from 'constant/commonStyles';

const { flex1, alignCenter, alignSeftCenter, spaceBetween, flexDirectionRow } = CommonStyles;

const styles = StyleSheet.create({
  container: {
    ...flex1,
    ...flexDirectionRow,
    ...spaceBetween,
    margin: resWidth(10),
  },
  containerItem: {
    ...alignSeftCenter,
    ...alignCenter,
    ...spaceBetween,
    ...flexDirectionRow,
    ...flex1,
    alignItems: 'center',
    padding: resWidth(15),
    borderRadius: resWidth(2),
  },
});

export default styles;
