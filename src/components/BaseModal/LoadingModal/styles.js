import { StyleSheet } from 'react-native';
import Colors from 'constant/colors';
import { resWidth } from 'utils/screen';

import Common from 'constant/commonStyles';

const { flex1, alignCenter } = Common;

const styles = StyleSheet.create({
  container: {
    ...flex1,
    ...alignCenter,
    backgroundColor: Colors.black70,
  },
  viewTop: {
    top: '25%',
  },
  animation: {
    width: resWidth(300),
    height: resWidth(300),
  },
});

export default styles;
