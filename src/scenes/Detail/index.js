import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goBack } from 'navigation/Actions/rootNavigation';
import { updateServerBaseUrl } from 'services/ServerConfig/actions';
import ServerConfigSelector from 'services/ServerConfig/selectors';
import Detail from './Detail';

const mapStateToProps = (state) => ({
  baseUrl: ServerConfigSelector.getServerBaseUrl(state),
});

const mapDispatchToProps = (dispatch) => {
  const binActionCreators = bindActionCreators(
    {
      updateServerBaseUrl,
    },
    dispatch
  );
  return {
    goBack,
    ...binActionCreators,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
