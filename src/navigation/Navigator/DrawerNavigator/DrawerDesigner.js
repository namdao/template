import React, { memo } from 'react';
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
import styles from './styles';

const DrawerDesigner = ({ user, version, logout }) => {
  const role = `${l10n.role}: ${user?.roles[0]?.name}`;
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
DrawerDesigner.propTypes = {
  navigation: PropTypes.shape({ navigate: doNothing }),
  logout: PropTypes.func,
  version: PropTypes.string,
  user: PropTypes.shape({ email: PropTypes.string }),
};
DrawerDesigner.defaultProps = {
  navigation: {},
  logout: doNothing,
  version: '',
  user: PropTypes.shape({ email: '' }),
};
export default memo(DrawerDesigner);
