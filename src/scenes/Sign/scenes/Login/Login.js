import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Container from 'components/Container';
import BasedText from 'components/BasedText';
import { resFont } from 'utils/screen';
import { l10n } from 'languages';
import Colors from 'constant/colorConstant';
import KeyboardAware from 'components/KeyboardAware';
import styles from './styles';
import EmailField from './EmailField';
import PasswordField from './PasswordField';

export default class Login extends PureComponent {
  render() {
    return (
      <Container style={styles.container} forceInset={{ bottom: 'never' }}>
        <View style={styles.halftTop}>
          <BasedText size={resFont(30)} weight="600" color={Colors.white}>
            {l10n.well_come}
          </BasedText>
        </View>
        <View style={styles.space30} />
        <Animatable.View animation="fadeInUpBig" style={styles.halftBottom}>
          <KeyboardAware>
            <ScrollView keyboardShouldPersistTaps="handled">
              <EmailField />
              <View style={styles.space10} />
              <PasswordField />
            </ScrollView>
          </KeyboardAware>
        </Animatable.View>
      </Container>
    );
  }
}
