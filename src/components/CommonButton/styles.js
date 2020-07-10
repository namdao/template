import { StyleSheet } from 'react-native';
import Colors from 'constant/colors';
import { resHeight, resFont } from 'utils/screen';
import { ObjectStyles } from 'constant/commonStyles';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
  },
  linearGradient: {
    justifyContent: 'center',
    height: resHeight(40),
  },
  flatButton: {
    height: resHeight(45),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.success,
    ...ObjectStyles.buttonShadow,
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
