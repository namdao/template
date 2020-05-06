import { StyleSheet } from 'react-native';
import Colors from 'constant/colors';
import { resWidth, perWidth, resHeight, resFont } from 'utils/screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.polo_blue,
  },
  contentBox: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: resWidth(10),
  },
  containerBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmBtn: {
    height: resHeight(40),
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: resWidth(4),
    margin: resWidth(10),
    backgroundColor: Colors.success,
  },
  title: {
    fontSize: resFont(16),
    fontWeight: '700',
    color: Colors.warning,
    alignSelf: 'flex-start',
    marginBottom: resHeight(10),
    marginHorizontal: resWidth(15),
  },
  textNormal: {
    color: Colors.white,
    fontSize: resFont(20),
    fontWeight: '600',
  },
  boardBox: {
    width: perWidth(85),
    backgroundColor: Colors.white,
    borderRadius: resWidth(4),
    marginHorizontal: resWidth(15),
    paddingVertical: resWidth(15),
  },
  buttonServer: {
    flex: 1,
    alignItems: 'center',
    height: resHeight(40),
    marginHorizontal: resWidth(5),
    backgroundColor: Colors.completed,
    borderRadius: resHeight(3),
  },
  btnTxt: {
    fontWeight: '500',
    marginVertical: resHeight(10),
    color: Colors.white,
    fontSize: resFont(18),
  },
});
