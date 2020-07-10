import React, { Component } from 'react';
import { Animated, PanResponder, View } from 'react-native';
import PropTypes from 'prop-types';
import { doNothing } from 'utils/utility';
import styles from './styles';

export default class SwipeView extends Component {
  constructor(props) {
    super(props);
    this.horizontalSwipeGestureBegan = false;
    this.horizontalSwipeGestureEnded = false;
    this.rowItemJustSwiped = false;
    this.onMoving = false;
    this.swipeInitialX = null;
    this.ranPreview = false;
    const { swipingLeft } = this.props;
    this.state = {
      dimensionsSet: false,
      hiddenHeight: 0,
      hiddenWidth: 0,
      swipingLeft,
    };
    this.translateX = new Animated.Value(0);
  }

  UNSAFE_componentWillMount() {
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gs) => this.handleOnMoveShouldSetPanResponder(e, gs),
      onPanResponderMove: (e, gs) => this.handlePanResponderMove(e, gs),
      onPanResponderRelease: (e, gs) => this.handlePanResponderEnd(e, gs),
      onPanResponderTerminate: (e, gs) => this.handlePanResponderEnd(e, gs),
      onShouldBlockNativeResponder: () => false,
    });
  }

  getPreviewAnimation = (toValue, delay) => {
    const { previewDuration } = this.props;
    return Animated.timing(this.translateX, {
      duration: previewDuration,
      toValue,
      delay,
      useNativeDriver: true,
    });
  };

  onContentLayout = (e) => {
    const {
      recalculateHiddenLayout,
      previewSwipeDemo,
      previewOpenDelay,
      previewCloseDelay,
    } = this.props;
    this.setState({
      dimensionsSet: !recalculateHiddenLayout,
      hiddenHeight: e.nativeEvent.layout.height,
      hiddenWidth: e.nativeEvent.layout.width,
    });

    if (previewSwipeDemo && !this.ranPreview) {
      const { previewOpenValue } = this.props;
      this.ranPreview = true;

      this.getPreviewAnimation(previewOpenValue, previewOpenDelay).start(() => {
        this.getPreviewAnimation(0, previewCloseDelay).start();
      });
    }
  };

  onTouchMove = () => {
    const { onTouchMove } = this.props;
    if (onTouchMove) {
      onTouchMove();
    }
  };

  // eslint-disable-next-line no-unused-vars
  handleOnMoveShouldSetPanResponder = (e, gs) => {
    const { dx } = gs;
    const { directionalDistanceChangeThreshold, disableSwipeToLeft } = this.props;
    if (disableSwipeToLeft) {
      return dx > directionalDistanceChangeThreshold;
    }
    return Math.abs(dx) > directionalDistanceChangeThreshold;
  };

  // eslint-disable-next-line no-unused-vars
  handlePanResponderMove = (e, gestureState) => {
    const { dx } = gestureState;
    const absDx = Math.abs(dx);
    const { _value } = this.translateX;

    if (this.horizontalSwipeGestureEnded) {
      return;
    }
    const {
      directionalDistanceChangeThreshold,
      disableSwipeToLeft,
      disableSwipeToRight,
      leftOpenValue,
      swipeToOpenPercent,
      rightOpenValue,
    } = this.props;
    if (absDx > directionalDistanceChangeThreshold) {
      if (this.swipeInitialX === null) {
        this.swipeInitialX = _value;
      }
      if (!this.horizontalSwipeGestureBegan) {
        this.horizontalSwipeGestureBegan = true;
        // this.props.swipeGestureBegan && this.props.swipeGestureBegan();
      }

      let newDX = this.swipeInitialX + dx;
      if (disableSwipeToLeft && newDX < 0) {
        newDX = 0;
      }
      if (disableSwipeToRight && newDX > 0) {
        newDX = 0;
      }

      this.translateX.setValue(newDX);

      let toValue = 0;
      const { swipingLeft } = this.state;
      if (_value >= 0) {
        if (swipingLeft) {
          this.setState(
            {
              // ...this.state,
              swipingLeft: false,
            },
            () => {
              this.onMoving = true;
              this.onTouchMove();
            }
          );
        }
        const leftOpen = leftOpenValue * (swipeToOpenPercent / 100);
        if (_value > leftOpen) {
          toValue = leftOpenValue;
          this.onSwipedRight(toValue);
        }
      } else {
        if (!swipingLeft) {
          this.setState(
            {
              // ...this.state,
              swipingLeft: true,
            },
            () => {
              this.onMoving = false;
              this.onTouchMove();
            }
          );
        }

        const rightOpen = rightOpenValue * (swipeToOpenPercent / 100);
        if (_value < rightOpen) {
          toValue = rightOpenValue;
          this.onSwipedLeft(toValue);
        }
      }
    }
  };

  handlePanResponderEnd = () => {
    this.onMoving = false;
    if (!this.horizontalSwipeGestureEnded) this.closeRow();
  };

  closeRow = () => {
    if (this.rowItemJustSwiped) {
      this.forceCloseRow();
    } else {
      this.manuallySwipeView(0).then(() => {
        this.setState({
          // ...this.state,
          swipingLeft: true,
        });
      });
    }
    this.onTouchMove();
  };

  forceCloseRow = () => {
    Animated.timing(this.translateX, {
      duration: 0,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  onSwipedLeft = (toValue) => {
    const { onSwipedLeft } = this.props;

    this.horizontalSwipeGestureEnded = true;
    this.rowItemJustSwiped = true;

    this.manuallySwipeView(toValue).then(() => {
      if (onSwipedLeft) onSwipedLeft();
      this.closeRow();
    });
  };

  onSwipedRight = (toValue) => {
    const { onSwipedRight } = this.props;

    this.horizontalSwipeGestureEnded = true;
    this.rowItemJustSwiped = true;

    this.manuallySwipeView(toValue).then(() => {
      if (onSwipedRight) onSwipedRight();
      this.closeRow();
    });
  };

  manuallySwipeView = (toValue) =>
    new Promise((resolve) => {
      const { swipeDuration } = this.props;
      Animated.timing(this.translateX, {
        duration: swipeDuration,
        toValue,
        useNativeDriver: true,
      }).start(() => {
        this.swipeInitialX = null;
        this.horizontalSwipeGestureBegan = false;
        this.horizontalSwipeGestureEnded = false;
        this.onMoving = false;
        resolve();
      });
    });

  renderVisibleContent = () => {
    const { renderVisibleContent } = this.props;
    return renderVisibleContent();
  };

  renderRowContent = () => {
    const { dimensionsSet } = this.state;
    if (dimensionsSet) {
      return (
        <Animated.View
          {...this.panResponder.panHandlers}
          style={{
            transform: [{ translateX: this.translateX }],
          }}
        >
          {this.renderVisibleContent()}
        </Animated.View>
      );
    }
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        onLayout={(e) => this.onContentLayout(e)}
        style={{
          transform: [{ translateX: this.translateX }],
        }}
      >
        {this.renderVisibleContent()}
      </Animated.View>
    );
  };

  render() {
    const { hiddenHeight, hiddenWidth, swipingLeft } = this.state;
    const { renderRightView, renderLeftView } = this.props;
    return (
      <View>
        <View
          style={[
            styles.hidden,
            {
              height: hiddenHeight,
              width: hiddenWidth,
            },
          ]}
        >
          {swipingLeft
            ? (renderRightView && renderRightView()) || null
            : (renderLeftView && renderLeftView()) || null}
        </View>
        {this.renderRowContent()}
      </View>
    );
  }
}

SwipeView.propTypes = {
  /**
   * TranslateX: How much view opens from the left
   * when swiping left-to-right (positive number)
   */
  leftOpenValue: PropTypes.number,
  /**
   * TranslateX: How much view opens from the right
   * when swiping right-to-left (negative number)
   */
  rightOpenValue: PropTypes.number,
  /**
   * Duration of the slide out swipe animation
   */
  swipeDuration: PropTypes.number,
  /**
   * What % of the left/right openValue does the user need to swipe
   * past to trigger onSwipedLeft/onSwipedRight actions.
   */
  swipeToOpenPercent: PropTypes.number,
  /**
   * Disable ability to swipe view to left
   */
  disableSwipeToLeft: PropTypes.bool,
  /**
   * Disable ability to swipe view to right
   */
  disableSwipeToRight: PropTypes.bool,
  /**
   * Called when left swipe is compelted
   */
  onSwipedLeft: PropTypes.func,
  /**
   * Called when right swipe is compelted
   */
  onSwipedRight: PropTypes.func,
  /**
   * Should the view do a slide out preview to show that it is swipeable
   */
  previewSwipeDemo: PropTypes.bool,
  /**
   * Duration of the slide out preview animation
   */
  previewDuration: PropTypes.number,
  /**
   * TranslateX value for the slide out preview animation
   */
  previewOpenValue: PropTypes.number,
  /**
   * Delay before starting preview animation
   */
  previewOpenDelay: PropTypes.number,
  /**
   * Delay before closing preview animation
   */
  previewCloseDelay: PropTypes.number,
  /**
   * Should swiping initialize with right-to-left
   * This should be useful for swipe previews
   * ex: +ve previewOpenValue swipingLeft: false | -ve previewOpenValue swipingLeft: true
   */
  swipingLeft: PropTypes.bool,
  /**
   * Enable hidden row onLayout calculations to run always
   */
  recalculateHiddenLayout: PropTypes.bool,
  /**
   * Change the sensitivity of the row
   */
  directionalDistanceChangeThreshold: PropTypes.number,
  /**
   * Main Content view.
   */
  renderVisibleContent: PropTypes.func.isRequired,
  /**
   * Left view to render behind the right view.
   */
  renderLeftView: PropTypes.func,
  /**
   * Right view to render behind the item view.
   */
  renderRightView: PropTypes.func,
  onTouchMove: PropTypes.func,
};

SwipeView.defaultProps = {
  leftOpenValue: 0,
  rightOpenValue: 0,
  swipeDuration: 250,
  swipeToOpenPercent: 35,
  disableSwipeToLeft: false,
  disableSwipeToRight: false,
  previewSwipeDemo: false,
  previewDuration: 300,
  previewOpenValue: -60,
  previewOpenDelay: 350,
  previewCloseDelay: 300,
  swipingLeft: true,
  recalculateHiddenLayout: false,
  directionalDistanceChangeThreshold: 2,
  renderLeftView: doNothing,
  renderRightView: doNothing,
  onSwipedLeft: doNothing,
  onSwipedRight: doNothing,
  onTouchMove: doNothing,
};
