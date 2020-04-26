import { Component } from 'react';
import PropTypes from 'prop-types';
import { AppState } from 'react-native';
import { setLanguage } from 'languages';
import { doNothing } from 'utils/utility';

export default class AppStateHandler extends Component {
  static propTypes = {
    setAppState: PropTypes.func,
    appState: PropTypes.string,
    user: PropTypes.shape({}),
    locale: PropTypes.string,
  };

  static defaultProps = {
    setAppState: doNothing,
    appState: 'active',
    user: null,
    locale: 'vi',
  };

  constructor(props) {
    super(props);
    const { appState, setAppState, locale } = this.props;
    setAppState(appState);
    setLanguage(locale);
  }

  UNSAFE_componentWillMount = () => {
    AppState.addEventListener('change', this.onAppStateChange);
  };

  componentWillUnmount = () => {
    AppState.removeEventListener('change', this.onAppStateChange);
  };

  onAppStateChange = (nextAppState) => {
    const { setAppState } = this.props;

    setAppState(nextAppState);
  };

  render() {
    return null;
  }
}
