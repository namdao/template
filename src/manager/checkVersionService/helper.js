import semver from 'semver';
import { UPDATE_MODE } from './constants';

export const checkShouldUpdate = (currentVersion, storeVersion) => {
  const splitCurrentVersion = semver.coerce(currentVersion);
  const splitStoreVersion = semver.coerce(storeVersion);
  const { major: currentVersionMajor, minor: currentVersionMinor } = splitCurrentVersion;
  const { major: storeVersionMajor, minor: storeVersionMinor } = splitStoreVersion;
  if (
    currentVersionMajor < storeVersionMajor ||
    (currentVersionMajor === storeVersionMajor && currentVersionMinor < storeVersionMinor)
  ) {
    return UPDATE_MODE.STORE;
  }
  return UPDATE_MODE.NONE;
};
