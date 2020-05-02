import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'constant/colorConstant';
import { TAB_NAVIGATOR } from './ConstantNavigator';
import TabNavigator from './TabNavigator';
import styles from './styles';

const DrawerStack = createDrawerNavigator();

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
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
        // contentContainerStyle={styles.flex1}
        drawerContentOptions={{
          activeBackgroundColor: Colors.transparent,
          activeTintColor: Colors.white,
          inactiveTintColor: Colors.white,
        }}
        sceneContainerStyle={styles.bgTransparent}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}
      >
        <DrawerStack.Screen name={TAB_NAVIGATOR}>
          {(props) => <TabNavigator {...props} style={animatedStyle} />}
        </DrawerStack.Screen>
      </DrawerStack.Navigator>
    </LinearGradient>
  );
};

export default DrawerNavigator;
