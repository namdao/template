import { StyleSheet } from 'react-native';
import { resHeight } from 'utils/screen';
import Colors from './colorConstant';

export const Border = {
  thin: StyleSheet.hairlineWidth,
  medium: StyleSheet.hairlineWidth * 2,
  semiBold: StyleSheet.hairlineWidth * 3,
  bold: StyleSheet.hairlineWidth * 4,
};

export const ObjectStyles = {
  itemShadow: {
    elevation: 1,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  buttonShadow: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemBorderBottom: {
    borderBottomWidth: Border.thin,
    borderBottomColor: Colors.polo_blue,
  },
  itemBorderTop: {
    borderTopWidth: Border.thin,
    borderTopColor: Colors.light_gray,
  },
  itemTextShadow: {
    textShadowColor: Colors.BLACK_OPACITY40,
    textShadowRadius: 2,
    textShadowOffset: { width: 1, height: 1 },
    elevation: 2,
  },
  cardShadow: {
    shadowColor: Colors.periwinkleBlue25,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2.62,
    elevation: 4,
  },
  headerShadow: {
    shadowColor: 'rgba(0,0,0,0.15)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 16,
    shadowOpacity: 1,
    elevation: 8,
  },
  bottomShadow: {
    shadowColor: Colors.black15,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 1,
    shadowRadius: 2.62,
    elevation: 14,
  },
};

export default StyleSheet.create({
  flex1Center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hide: { opacity: 0 },
  show: { opacity: 1 },
  flex1: { flex: 1 },
  absoluteFill: { ...StyleSheet.absoluteFillObject },
  absoluteFillCenter: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexDirectionRow: { flexDirection: 'row' },
  flexDirectionColumn: { flexDirection: 'column' },
  activityIndicator: {
    marginVertical: resHeight(5),
  },
  absolute: { position: 'absolute' },
  transparentBg: { backgroundColor: Colors.transparent },
  flexCenter: { justifyContent: 'center', alignItems: 'center' },
  spaceBetween: { justifyContent: 'space-between' },
  alignCenter: { alignItems: 'center' },
  alignEnd: { alignItems: 'flex-end' },
  alignStart: { alignItems: 'flex-start' },
  alignSeftCenter: { alignSelf: 'center' },
  alignSeftStart: { alignSelf: 'flex-start' },
  alignSelfEnd: { alignSelf: 'flex-end' },
  justifyCenter: { justifyContent: 'center' },
  justifyStart: { justifyContent: 'flex-start' },
  justifyEnd: { justifyContent: 'flex-end' },
  colorMain: { color: Colors.main },
  textCapitalize: { textTransform: 'capitalize' },
  textUppercase: { textTransform: 'uppercase' },
});
