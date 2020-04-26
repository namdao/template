import { Dimensions, StatusBar, PixelRatio } from 'react-native';
import Platform from './platform';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];
const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const isLargeView = shortDimension >= 600;
const isTabletMode = shortDimension / longDimension > 0.7;
const STANDARD_WINDOW = { width: 375, height: 667 };
// const buildAppTranslucentHeaderSpace = () => {
//   if (Platform.isAndroid) {
//     return Platform.isSupportTranslucentBar ? statusBarHeight : 0;
//   }
//   return 0;
// };

/**
 *
  Sometimes you don't want to scale everything in a linear manner, that's where moderate scale comes in.
  The cool thing about it is that you can control the resize factor (default is 0.5).
  If normal scale will increase your size by +2X, moderateScale will only increase it by +X, for example:
  ➡️ responsiveWidth(10) = 20
  ➡️ responsiveHeight(10) = 15
  ➡️ responsiveFontSize(10, 0.1) = 11
 * @param {*} size Number
 * @param {*} factor Number : default = 0.5
 */
export const perWidth = (size) =>
  PixelRatio.roundToNearestPixel((shortDimension * parseFloat(size)) / 100);
export const perHeight = (size) =>
  PixelRatio.roundToNearestPixel((longDimension * parseFloat(size)) / 100);
export const resWidth = (size) => (shortDimension / STANDARD_WINDOW.width) * size;
export const resHeight = (size) => (longDimension / STANDARD_WINDOW.height) * size;
// export const scaleFont = (size, factor = 0.5) => size + (scaleWidth(size) - size) * factor;
export function resFont(size) {
  const newSize = (size * shortDimension) / STANDARD_WINDOW.width;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}
// const safeArea = {
//   bottom: Platform.hasNotch ? 24 : 0,
//   bottomFull: Platform.hasNotch ? 34 : 0,
//   top: Platform.hasNotch ? 34 : 0,
//   topFull: Platform.hasNotch ? 44 : 0,
// };

// const statusBarMarginH = buildAppTranslucentHeaderSpace();
const headerTrueHeight = resHeight(40);
// const headerHeight = statusBarMarginH + headerTrueHeight;
// const safeTopPadding = safeArea.top + statusBarMarginH;
// const homeIndicatorHeight = Platform.hasNotch ? 34 : 0;

const Screen = {
  headerTrueHeight,
  statusBarHeight,
  width,
  height,
  isLargeView,
  isTabletMode,
};

export default Screen;
