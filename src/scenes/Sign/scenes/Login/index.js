import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import reduxFormConstants from 'scenes/Sign/constants/reduxFormConstants';
import { requestLogin } from 'scenes/Sign/redux/actions';
import Login from './Login';

const { FORM_LOGIN } = reduxFormConstants;
const mapDispatchToProps = (dispatch) => {
  const binActionCreators = bindActionCreators(
    {
      requestLogin,
    },
    dispatch
  );
  return {
    ...binActionCreators,
  };
};
const connectProps = connect(null, mapDispatchToProps);
export default connectProps(
  reduxForm({
    form: FORM_LOGIN.NAME,
    pure: true,
  })(Login)
);
