import React, { PureComponent } from 'react';
import { Animated, TextInput, Keyboard, ViewPropTypes, Text } from 'react-native';
import Proptypes from 'prop-types';
import IconButton from 'components/IconButton';
import { resWidth, perWidth } from 'utils/screen';
import Common from 'constant/commonStyles';
import { l10n } from 'languages';
import { doNothing } from 'utils/utility';
import styles from './styles';

const { flexDirectionRow } = Common;

class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    const { searchShortWidth } = this.props;
    this.inputLength = new Animated.Value(searchShortWidth);
    this.state = {
      searchBarFocused: false,
      text: '',
    };
  }

  onFocus = () => {
    const { searchFullWidth } = this.props;
    this.setState({ searchBarFocused: true }, () => {
      Animated.parallel([
        Animated.timing(this.inputLength, {
          toValue: searchFullWidth,
          duration: 250,
          useNativeDriver: false,
        }),
      ]).start();
    });
    this.inputRef.focus();
  };

  onBlur = () => {
    this.setState({ searchBarFocused: false }, () => {
      const { searchShortWidth } = this.props;
      Keyboard.dismiss();
      Animated.parallel([
        Animated.timing(this.inputLength, {
          toValue: searchShortWidth,
          duration: 250,
          useNativeDriver: false,
        }),
      ]).start();
    });
    this.onChange('');
  };

  onChange = (value) => {
    const { onChangeText } = this.props;
    this.setState({ text: value });
    onChangeText(value);
  };

  render() {
    const { iconStyle, placeholder, inputStyle, containerStyle } = this.props;
    const { searchBarFocused, text } = this.state;
    const animateStyle = {
      width: this.inputLength,
    };
    const backgroundStyle = searchBarFocused ? styles.showSearch : null;
    const inputPlaceHolder = placeholder !== '' ? placeholder : l10n.search_placeholder;
    return (
      <Animated.View
        style={[
          flexDirectionRow,
          {
            ...animateStyle,
            ...backgroundStyle,
          },
          containerStyle,
        ]}
      >
        <TextInput
          autoCorrect={false}
          ref={this.setInputRef}
          style={[styles.inputSearch, inputStyle]}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onChangeText={this.onChange}
          placeholder={inputPlaceHolder}
          autoCompleteType="off"
          defaultValue={text}
        />
        <IconButton
          name={searchBarFocused ? 'md-close' : 'ios-search'}
          onPress={searchBarFocused ? this.onBlur : this.onFocus}
          iconStyles={[styles.iconSearch, iconStyle]}
        />
      </Animated.View>
    );
  }

  setInputRef = (ref) => {
    this.inputRef = ref;
  };
}
SearchBar.propTypes = {
  iconStyle: Proptypes.oneOfType(ViewPropTypes.style, Text.propTypes.style),
  inputStyle: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  placeholder: Proptypes.string,
  onChangeText: Proptypes.func,
  searchFullWidth: Proptypes.number,
  searchShortWidth: Proptypes.number,
};

SearchBar.defaultProps = {
  placeholder: '',
  iconStyle: {},
  inputStyle: {},
  containerStyle: {},
  onChangeText: doNothing,
  searchFullWidth: perWidth(100),
  searchShortWidth: resWidth(42),
};

export default SearchBar;
