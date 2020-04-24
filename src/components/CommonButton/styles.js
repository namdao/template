import { StyleSheet } from 'react-native';
import Colors from 'constant/colorConstant';
import { resHeight, resFont } from 'utils/screen';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
  },
  linearGradient: {
    justifyContent: 'center',
    height: resHeight(40),
  },
  buttonText: {
    fontSize: resFont(14),
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.white,
    backgroundColor: Colors.transparent,
  },
  activator: {
    color: Colors.white,
  },
});

export default styles;
