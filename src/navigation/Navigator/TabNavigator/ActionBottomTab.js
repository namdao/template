import React from 'react';
import { l10n } from 'languages';
import { View } from 'react-native';
/**
 * Component
 */
import BasedText from 'components/BasedText';
import CommonButton from 'components/CommonButton';
import Spacing from 'components/Spacing';
import IconButton from 'components/IconButton';
import BottomContainer from 'components/BottomContainer';
import colors from 'constant/colors';
import Screen from 'utils/screen';
import styles from './styles';

class ActionBottomTab extends React.PureComponent {
  propsBottom = null;

  showContent = () => {
    this.propsBottom.show && this.propsBottom.show();
  };

  hideContent = () => {
    this.propsBottom.hide && this.propsBottom.hide();
  };

  setBottomProps = (bottomProps) => {
    this.propsBottom = bottomProps;
  };

  renderInner = (bottomProps) => {
    this.setBottomProps(bottomProps);
    return (
      <>
        <Spacing />
        <CommonButton style={styles.btnUser}>
          <View style={styles.btnRow}>
            <IconButton name="md-person-add" />
            <BasedText color={colors.white}>{l10n.add_user}</BasedText>
          </View>
          <IconButton name="ios-arrow-forward" />
        </CommonButton>
        <Spacing />
        <CommonButton style={styles.btnOrderDesign}>
          <View style={styles.btnRow}>
            <IconButton name="ios-images" />
            <BasedText color={colors.white}>{l10n.add_order_design}</BasedText>
          </View>
          <IconButton name="ios-arrow-forward" />
        </CommonButton>
        <Spacing />
        <CommonButton style={styles.btnOrderPrint}>
          <View style={styles.btnRow}>
            <IconButton name="ios-print" />
            <BasedText color={colors.white}>{l10n.add_order_print}</BasedText>
          </View>
          <IconButton name="ios-arrow-forward" />
        </CommonButton>
      </>
    );
  };

  render() {
    const snap = Screen.isIphoneX() ? [0, 280] : [0, 240];
    return <BottomContainer content={this.renderInner} snapPoints={snap} />;
  }
}
export default ActionBottomTab;
