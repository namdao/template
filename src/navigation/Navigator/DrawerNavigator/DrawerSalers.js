import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { resFont } from 'utils/screen';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';
import Colors from 'constant/colors';
import Images from 'utils/images';
import Spacing from 'components/Spacing';
import IconButton from 'components/IconButton';
import LineBreak from 'components/LineBreak';
import BasedText from 'components/BasedText';
import { l10n } from 'languages';
import { doNothing } from 'utils/utility';
import Platform from 'utils/platform';
import styles from './styles';
import { STACK } from '../ConstantNavigator';

const DrawerSalers = ({ user, navigation, logout, version }) => {
  const role = `${l10n.role}: ${user?.roles[0]?.name}`;
  const navigateHome = () => {
    navigation.navigate(STACK.DRAWER_MENU.HOME);
  };
  const navigateListCustomer = () => {
    navigation.navigate(STACK.DRAWER_MENU.CUSTOMER_LIST);
  };
  const navigateListCompany = () => {
    navigation.navigate(STACK.DRAWER_MENU.COMPANY_LIST);
  };
  const logoutApp = () => {
    logout();
  };

  return (
    <View style={styles.containerMenu}>
      <View style={styles.rowStart}>
        <FastImage source={Images.imageLogo} resizeMode="cover" style={styles.mainLogo} />
        <Spacing width={15} />
        <View>
          <BasedText style={styles.lineCenter} color={Colors.white} size={resFont(16)} weight="500">
            {user.email}
          </BasedText>
          <Spacing height={10} />
          <BasedText color={Colors.white} size={resFont(13)}>
            {role}
          </BasedText>
        </View>
      </View>
      <Spacing />
      <LineBreak />
      <Spacing />
      <TouchableOpacity style={styles.rowStart} onPress={navigateHome}>
        <IconButton name="ios-home" />
        <BasedText style={styles.lineCenter} color={Colors.white} size={resFont(16)} weight="500">
          {l10n.title_home}
        </BasedText>
      </TouchableOpacity>
      <Spacing />
      <LineBreak />
      <Spacing />
      <TouchableOpacity style={styles.rowStart} onPress={navigateListCustomer}>
        <IconButton name="ios-contacts" />
        <BasedText style={styles.lineCenter} color={Colors.white} size={resFont(16)} weight="500">
          {l10n.title_customer_list}
        </BasedText>
      </TouchableOpacity>
      <Spacing />
      <LineBreak />
      <Spacing />
      {!Platform.isProduction && (
        <>
          <TouchableOpacity style={styles.rowStart} onPress={navigateListCompany}>
            <IconButton name="ios-briefcase" />
            <BasedText
              style={styles.lineCenter}
              color={Colors.white}
              size={resFont(16)}
              weight="500"
            >
              {l10n.title_company_list}
            </BasedText>
          </TouchableOpacity>
          <Spacing />
          <LineBreak />
          <Spacing />
        </>
      )}
      <TouchableOpacity style={styles.rowStart} onPress={logoutApp}>
        <IconButton name="ios-exit" />
        <BasedText style={styles.lineCenter} color={Colors.white} size={resFont(16)} weight="500">
          {l10n.sign_out}
        </BasedText>
      </TouchableOpacity>
      <Spacing />
      <LineBreak />
      <Spacing />
      <View style={styles.rowStart}>
        <BasedText
          style={styles.lineCenter}
          textAlign="left"
          color={Colors.white}
          size={resFont(16)}
          weight="500"
        >
          {version}
        </BasedText>
      </View>
    </View>
  );
};
DrawerSalers.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
  logout: PropTypes.func,
  version: PropTypes.string,
  user: PropTypes.shape({ email: PropTypes.string }),
};
DrawerSalers.defaultProps = {
  navigation: { navigate: doNothing },
  logout: doNothing,
  version: '',
  user: { email: '' },
};
export default DrawerSalers;
