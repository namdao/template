import LocalizedStrings from 'react-native-localization';
import Logger from 'utils/logger';
import en from './en';
import vi from './vi';
/**
export default { en, vi };	 * get localized text
 * l10n stand for localization
 */
export const l10n = new LocalizedStrings({
  vi,
  en,
});

export const setLanguage = async (langCode) => {
  const currentLang = l10n.getLanguage();
  Logger.log('-------- current display Lang:', l10n.getLanguage());
  Logger.log('-------- new Setting display language:', langCode, typeof langCode);
  Logger.log('-------- device Lang:', l10n.getInterfaceLanguage());

  if (!langCode) {
    Logger.log('-------- user not yet set display language');
    return;
  }
  if (langCode === currentLang) {
    Logger.log('-------- new Languages same as old display languages');
    return;
  }

  l10n.setLanguage(langCode);
  Logger.log('-------- after change display Lang:', l10n.getLanguage());
};
