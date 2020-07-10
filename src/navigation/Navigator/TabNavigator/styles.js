import { StyleSheet } from 'react-native';
import Colors from 'constant/colors';
import { resWidth, resHeight } from 'utils/screen';

import Common from 'constant/commonStyles';

const { spaceBetween, flexDirectionRow } = Common;
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
    backgroundColor: Colors.mainBlue2,
  },
  btnIcon: {
    paddingVertical: 0,
    top: resWidth(3),
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
