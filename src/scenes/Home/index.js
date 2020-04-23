import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateServerBaseUrl } from 'services/ServerConfig/actions';
import ServerConfigSelector from 'services/ServerConfig/selectors';

import Home from './Home';

const mapStateToProps = (state) => ({
  baseUrl: ServerConfigSelector.getServerBaseUrl(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateServerBaseUrl,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
