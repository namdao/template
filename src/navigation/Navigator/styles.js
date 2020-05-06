import { StyleSheet } from 'react-native';
import Colors from 'constant/colors';
import { resWidth, perWidth } from 'utils/screen';
import Common from 'constant/commonStyles';

const { flex1 } = Common;
export default StyleSheet.create({
  stack: {
    ...flex1,
    shadowColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: resWidth(8),
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
  },
  drawerStyles: {
    ...flex1,
    width: perWidth(50),
    backgroundColor: Colors.transparent,
  },
  bgTransparent: {
    backgroundColor: Colors.transparent,
  },
  flex1: {
    ...flex1,
  },
  menuBar: {
    color: Colors.lightSalmon,
  },
  // drawerItem: {
  //   ...alignStart,
  //   marginVertical: 0,
  // },
  // drawerLabel: {
  //   color: Colors.white,
  //   marginLeft: resWidth(-16),
  // },
  // avatar: {
  //   borderRadius: 60,
  //   marginBottom: 16,
  //   borderColor: 'white',
  //   borderWidth: StyleSheet.hairlineWidth,
  // },
});
