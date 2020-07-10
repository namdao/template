import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SessionSelector from 'services/Session/selectors';
import { setDeviceToken } from 'services/Session/actions';
import NotificationService from './NotificationService';

const mapStateToProps = (state) => ({
  deviceToken: SessionSelector.getDeviceToken(state),
});
const mapDispatchToProps = (dispatch) => {
  const binActionCreators = bindActionCreators(
    {
      setDeviceToken,
    },
    dispatch
  );
  return {
    ...binActionCreators,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationService);
