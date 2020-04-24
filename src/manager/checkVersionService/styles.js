import { StyleSheet } from 'react-native';
import Colors from 'constant/colorConstant';
import { resFont, resWidth, resHeight, perWidth, perHeight } from 'utils/screen';
import { ObjectStyles } from 'constant/commonStyles';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.white,
    borderRadius: resWidth(4),
    paddingHorizontal: resWidth(15),
    paddingTop: resHeight(40),
    opacity: 1,
    zIndex: 2,
    alignItems: 'center',
    transform: [
      {
        translateY: resHeight(100),
      },
    ],
  },
  image: {
    width: perWidth(100),
    height: perHeight(50),
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  descriptionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeToUpdateTitle: {
    fontWeight: '700',
    fontSize: resFont(26),
    color: Colors.polo_blue,
  },
  forceUpdateDescription: {
    fontWeight: '600',
    fontSize: resFont(15),
    color: Colors.black50,
    lineHeight: resHeight(30),
    paddingHorizontal: resWidth(20),
    paddingTop: resHeight(30),
    textAlign: 'center',
  },
  codePushUpdateDescription: {
    fontWeight: '600',
    fontSize: resFont(17),
    color: Colors.black50,
    lineHeight: resHeight(30),
    paddingVertical: resWidth(7),
    paddingHorizontal: resWidth(20),
  },
  updateNowButton: {
    alignSelf: 'center',
    width: perWidth(85),
  },
  shardowCard: {
    ...ObjectStyles.cardShadow,
  },
});
export default styles;
