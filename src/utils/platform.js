import { Platform as NativePlatform } from 'react-native';
// import Config from 'react-native-config';

// const APP_USE_TRANSLUCENT_STATUS_BAR = true;

const PLATFORM = NativePlatform.OS;
const isAndroid = PLATFORM === 'android';
const isIos = PLATFORM === 'ios';
// const androidAPILevel = isAndroid ? NativePlatform.Version : 0;
// const androidVersion = isAndroid ? DeviceInfo.getSystemVersion() : '';
// const iosVersion = isIos ? NativePlatform.Version : 0;
// const isSupportTranslucentBar = (isIos && !hasNotch) || androidAPILevel >= 21;
// const isSupportStatusBarContent = APP_USE_TRANSLUCENT_STATUS_BAR && (isIos || androidAPILevel > 22);
// const DeviceId = getUniqueId();
// const deviceModel = DeviceInfo.getModel();
const KeyboardEvent = {
  Show: isIos ? 'keyboardWillShow' : 'keyboardDidShow',
  Hide: isIos ? 'keyboardWillHide' : 'keyboardDidHide',
};
// check app version
// const nativeVersion = DeviceInfo.getVersion();
// const jsVersion = semver.valid(semver.coerce(Constants.CODE_BUNDLE_ID));

const isDev = !!__DEV__;
const isProduction = !isDev;

const Platform = {
  isDev,
  isIos,
  isAndroid,
  isProduction,
  KeyboardEvent,
  OS: PLATFORM,
};

export default Platform;
