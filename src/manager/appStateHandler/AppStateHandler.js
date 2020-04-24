import { Component } from 'react';
import PropTypes from 'prop-types';
import { AppState } from 'react-native';
import { doNothing } from 'utils/utility';

export default class AppStateHandler extends Component {
  static propTypes = {
    setAppState: PropTypes.func,
    appState: PropTypes.string,
    user: PropTypes.shape({}),
  };

  static defaultProps = {
    setAppState: doNothing,
    appState: 'active',
    user: null,
  };

  constructor(props) {
    super(props);
    const { appState, setAppState } = this.props;
    setAppState(appState);
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
