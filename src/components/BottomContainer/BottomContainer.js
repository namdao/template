import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import IconButton from 'components/IconButton';
import BottomSheet from 'reanimated-bottom-sheet';
import colors from 'constant/colors';
import Common from 'constant/commonStyles';
import Spacing from 'components/Spacing';
import { doNothing } from 'utils/utility';
import styles from './styles';

const { flex1, alignSelfEnd } = Common;

class BottomContainer extends React.PureComponent {
  state = {
    isClick: false,
  };

  bottomSheetRef = React.createRef();

  show = () => {
    this.bottomSheetRef.current.snapTo(1);
  };

  hide = () => {
    this.bottomSheetRef.current.snapTo(0);
  };

  onOpenStart = () => {
    this.setState({ isClick: true });
  };

  onCloseStart = () => {
    this.setState({ isClick: false });
  };

  renderHeader = () => {
    return (
      <View style={[flex1, alignSelfEnd]}>
        <IconButton onPress={this.hide} name="ios-close-circle" size={30} color={colors.white} />
      </View>
    );
  };

  renderInner = () => {
    const { content, customStyleContainer } = this.props;
    const { isClick } = this.state;
    const show = isClick ? { opacity: 1 } : { opacity: 0 };
    return (
      <View style={[styles.bottomContainer, customStyleContainer, show]}>
        {content && typeof content === 'function' ? (
          content({ isClick, show: this.show, hide: this.hide })
        ) : (
          <Spacing />
        )}
      </View>
    );
  };

  render() {
    const { snapPoints, enableDragContent, enableScrollContent, children } = this.props;
    const { isClick } = this.state;
    const overlayBackground = isClick ? colors.black70 : colors.transparent;
    const pointerEvents = !isClick ? 'box-none' : 'auto';
    return (
      <>
        <BottomSheet
          ref={this.bottomSheetRef}
          snapPoints={snapPoints}
          renderContent={this.renderInner}
          renderHeader={this.renderHeader}
          initialSnap={0}
          onOpenStart={this.onOpenStart}
          onCloseStart={this.onCloseStart}
          enabledInnerScrolling={enableScrollContent}
          enabledHeaderGestureInteraction={false}
          enabledContentGestureInteraction={enableDragContent}
        />
        {children({ show: this.show, hide: this.hide })}
        <View
          onTouchStart={this.hide}
          pointerEvents={pointerEvents}
          style={[
            styles.bgTransparent,
            {
              backgroundColor: overlayBackground,
            },
          ]}
        />
      </>
    );
  }
}

BottomContainer.propTypes = {
  content: PropTypes.func,
  customStyleContainer: ViewPropTypes.style,
  enableScrollContent: PropTypes.bool,
  enableDragContent: PropTypes.bool,
  snapPoints: PropTypes.arrayOf(PropTypes.number),
  children: PropTypes.func,
};
BottomContainer.defaultProps = {
  content: doNothing,
  customStyleContainer: null,
  enableScrollContent: false,
  enableDragContent: false,
  snapPoints: [0, 240],
  children: doNothing,
};
export default BottomContainer;
