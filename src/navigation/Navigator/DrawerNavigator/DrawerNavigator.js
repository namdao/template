import React, { memo } from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import PropTypes from 'prop-types';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'constant/colors';
import { doNothing } from 'utils/utility';
import { l10n } from 'languages';
import { ROLE, BUILD_VERSION } from 'constant/appConstant';
import Platform from 'utils/platform';
import { STACK } from '../ConstantNavigator';
import TabNavigator from '../TabNavigator';
import DrawerSalers from './DrawerSalers';
import styles from '../styles';

const DrawerStack = createDrawerNavigator();

const DrawerContent = (props) => {
  const { user } = props || {};
  const role = user?.roles[0]?.name;
  const detectVersion = () => {
    const buildVersionJS = `${l10n.version} ${BUILD_VERSION}`;
    const env = Platform.isProduction ? '' : ' - DEV';
    return `${buildVersionJS} ${env}`;
  };
  return (
    <DrawerContentScrollView scrollEnabled={false}>
      {(role === ROLE.ADMIN || role === ROLE.SALE) && (
        <DrawerSalers
          user={user}
          navigation={props?.navigation}
          logout={props?.logout}
          version={detectVersion()}
        />
      )}
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = (props) => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };
  return (
    <LinearGradient style={styles.flex1} colors={[Colors.main, Colors.main2]}>
      <DrawerStack.Navigator
        drawerType="slide"
        overlayColor={Colors.transparent}
        drawerStyle={styles.drawerStyles}
        sceneContainerStyle={styles.bgTransparent}
        drawerContent={(propsDrawer) => {
          setProgress(propsDrawer.progress);
          return <DrawerContent {...props} />;
        }}
      >
        <DrawerStack.Screen
          name={STACK.DRAWER_MENU.HOME}
          options={{ title: l10n.title_home, swipeEnabled: false }}
        >
          {() => <TabNavigator style={animatedStyle} />}
        </DrawerStack.Screen>
      </DrawerStack.Navigator>
    </LinearGradient>
  );
};
DrawerNavigator.propTypes = {
  progress: PropTypes.func,
};
DrawerNavigator.defaultProps = {
  progress: doNothing,
};
export default memo(DrawerNavigator);
