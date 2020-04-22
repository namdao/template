import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { resetToLoginStack } from 'navigation/actions';
import { updateServerBaseUrl } from 'services/ServerConfig/actions';
import ServerConfigSelector from 'services/ServerConfig/selectors';
// import SessionSelector from 'services/session/selectors';
// import I18nSelector from 'services/i18n/selectors';
import AppGateKeeper from './AppKeeper';

const mapStateToProps = (state) => ({
  baseUrl: ServerConfigSelector.getServerBaseUrl(state),
  // token: SessionSelector.getToken(state),
  // locale: I18nSelector.getLocale(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      // resetToLoginStack,
      updateServerBaseUrl,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AppGateKeeper);
