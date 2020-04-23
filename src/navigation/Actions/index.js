import { CommonActions } from '@react-navigation/native';

export const navigateScreen = () =>
  CommonActions.navigate({
    name: 'Details',
  });
export const goBack = () => CommonActions.goBack();
