import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
/**
 * Screen
 */
import HomeScreen from 'scenes/Home';
import DetailScreen from 'scenes/Detail';
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'constant/colorConstant';
import PropTypes from 'prop-types';
import BackButton from 'components/BackButton/BackButton';
import IconButton from 'components/IconButton';
import { STACK, CONFIG } from './ConstantNavigator';
import styles from './styles';

const HomeStack = createStackNavigator();
const OptionHeaderNavigator = {
  headerTintColor: Colors.white,
  headerBackImage: () => <BackButton />,
  headerBackTitleVisible: false,
  headerBackground: () => (
    <LinearGradient colors={[Colors.mainBlue, Colors.mainBlue2]} style={styles.flex1} />
  ),
};

const HomeNavigator = ({ navigation }) => {
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <HomeStack.Navigator initialRouteName={STACK.HOME} screenOptions={{ ...OptionHeaderNavigator }}>
      <HomeStack.Screen
        name={STACK.HOME}
        component={HomeScreen}
        options={{
          ...CONFIG.HEADERALIGN.LEFT,
          headerLeft: () => <IconButton name="bars" onPress={toggleDrawer} />,
        }}
      />
      <HomeStack.Screen name={STACK.DETAILS} component={DetailScreen} />
    </HomeStack.Navigator>
  );
};

HomeNavigator.propTypes = {
  navigation: PropTypes.objectOf({}),
};
HomeNavigator.defaultProps = {
  navigation: {},
};
export default HomeNavigator;
