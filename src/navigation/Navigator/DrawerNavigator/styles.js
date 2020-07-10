import { StyleSheet } from 'react-native';
import { resWidth, perWidth, perHeight } from 'utils/screen';
import Common from 'constant/commonStyles';

const { justifyStart, spaceBetween, alignSeftCenter, justifyCenter, flexDirectionRow } = Common;
export default StyleSheet.create({
  containerMenu: {
    width: perWidth(100),
    height: perHeight(50),
    paddingVertical: perWidth(15),
    paddingHorizontal: perWidth(5),
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  mainLogo: {
    height: resWidth(50),
    width: resWidth(50),
    borderRadius: resWidth(50),
    ...justifyCenter,
  },
  rowItem: {
    ...spaceBetween,
    ...flexDirectionRow,
  },
  rowStart: {
    ...justifyStart,
    ...flexDirectionRow,
  },
  lineCenter: {
    ...alignSeftCenter,
  },
});
