import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { DropDownHelper } from 'components/DropDownMessage/DropDownHelper';
import { jumpToTab } from 'navigation/Actions/rootNavigation';
import { STACK } from 'navigation/Navigator/ConstantNavigator';

const NotificationService = ({ deviceToken, setDeviceToken }) => {
  const checkPermission = async () => {
    const authStatus = await messaging().requestPermission();
    return (
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL
    );
  };
  const getToken = async () => {
    if (!deviceToken) {
      const enabled = await checkPermission();
      if (enabled) {
        const newDeviceToken = await messaging().getToken();
        newDeviceToken && setDeviceToken(newDeviceToken);
      }
    }
  };

  const onBackgroundNotification = () => {
    // eslint-disable-next-line no-unused-vars
    return messaging().onNotificationOpenedApp((remoteMessage) => {
      jumpToTab(STACK.TAB_MENU.NOTIFICATIONS);
    });
  };

  const onInitAppNotification = () => {
    return messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          jumpToTab(STACK.TAB_MENU.NOTIFICATIONS);
        }
      });
  };

  const onAppNotification = () => {
    return messaging().onMessage(async (remoteMessage) => {
      const { notification } = remoteMessage;
      const { body, title } = notification || {};
      DropDownHelper.show('success', title, body);
    });
  };

  useEffect(() => {
    getToken();
    onBackgroundNotification();
    onInitAppNotification();
    onAppNotification();
  }, []);

  return null;
};
export default NotificationService;
