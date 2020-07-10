import { StyleSheet } from 'react-native';
import Colors from 'constant/colors';
import Screen, { resWidth, resHeight, perWidth } from 'utils/screen';

import Common from 'constant/commonStyles';

const { alignSeftCenter, spaceBetween, flexDirectionRow } = Common;
export default StyleSheet.create({
  row: {
    ...flexDirectionRow,
    backgroundColor: Colors.mainBlue2,
  },
  bottomMenuContainer: {
    flex: 1,
    height: resHeight(49),
    alignItems: 'center',
    paddingTop: resWidth(2),
    justifyContent: 'space-around',
    elevation: 8,
  },
  btnContainer: {
    position: 'absolute',
    borderRadius: resWidth(30),
    left: perWidth(43),
    zIndex: 9,
    backgroundColor: Colors.mainBlue2,
    bottom: resHeight(25) + Screen.getBottomDevice(),
  },
  btnIcon: {
    ...alignSeftCenter,
    paddingVertical: 0,
    top: resWidth(2),
    paddingHorizontal: resWidth(7),
  },
  btnRow: {
    ...flexDirectionRow,
    alignItems: 'center',
  },
  btnUser: {
    ...flexDirectionRow,
    ...spaceBetween,
    paddingHorizontal: resWidth(15),
    marginHorizontal: resWidth(15),
    backgroundColor: Colors.darkSkyBlue,
  },
  btnOrderDesign: {
    ...flexDirectionRow,
    ...spaceBetween,
    paddingHorizontal: resWidth(15),
    marginHorizontal: resWidth(15),
    backgroundColor: Colors.dustyOrange,
  },
  btnOrderPrint: {
    ...flexDirectionRow,
    ...spaceBetween,
    paddingHorizontal: resWidth(15),
    marginHorizontal: resWidth(15),
    backgroundColor: Colors.eucalyptus,
  },
  /** * Badge count */
  badgeContainer: {
    position: 'absolute',
    right: resWidth(30),
    top: resWidth(3),
    backgroundColor: Colors.cancelled,
    borderRadius: resWidth(13),
    width: resWidth(16),
    height: resWidth(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
