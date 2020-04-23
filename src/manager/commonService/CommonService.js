import React from 'react';
// import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import SetupAxios from 'manager/axiosManager';
// import { l10n } from 'languages';

class CommonService extends React.Component {
  constructor(props) {
    super(props);
    SetupAxios.setupOnResponseInterceptors(
      this.onReceivedToken,
      this.onUnauthorized,
      this.onBlacklist
    );
    /**
     * initial setup token for prevent caching view load api
     * without login token setted -> 401
     */
    props.token && SetupAxios.setHeaderToken(props.token, 'initial');
  }

  componentDidMount() {
    const { checkAutoLogin } = this.props;
    checkAutoLogin();
  }

  /** update axios header token when received new one */
  onReceivedToken = (newToken) => {
    const { updateToken, token } = this.props;
    if (newToken && newToken !== token) {
      updateToken(newToken);
    }
  };

  onUnauthorized = ({ url }) => {
    console.log(url);
    // const { logout, sessionStatus } = this.props;
    // if (sessionStatus !== SESSION_STATUS.AUTHORIZED || this.alreadyDisplayUnauthorized) return;
    // this.alreadyDisplayUnauthorized = true;
    // Alert.alert(l10n.alert, l10n.session_expired_description, [
    //   {
    //     text: l10n.alert_re_login,
    //     onPress: () => {
    //       this.alreadyDisplayUnauthorized = false;
    //       logout({ url });
    //     },
    //   },
    // ]);
  };

  onBlacklist = () => {
    // const { showModal, modalName, navigateToLoginStack } = this.props;
    // if (modalName === MODAL_NAMES.COMMON.MODAL_BLACKLIST) return;
    // navigateToLoginStack();
    // showModal(MODAL_NAMES.COMMON.MODAL_BLACKLIST, {});
  };

  render() {
    return null;
  }
}

CommonService.propTypes = {
  checkAutoLogin: PropTypes.func.isRequired,
  updateToken: PropTypes.func.isRequired,
  token: PropTypes.string,
  // logout: PropTypes.func.isRequired,
  // sessionStatus: PropTypes.string.isRequired,
};

CommonService.defaultProps = {
  token: '',
};

export default CommonService;
