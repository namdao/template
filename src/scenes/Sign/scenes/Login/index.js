import { reduxForm } from 'redux-form';
import reduxFormConstants from 'scenes/Sign/constants/reduxFormConstants';
import Login from './Login';

const { FORM_LOGIN } = reduxFormConstants;
export default reduxForm({
  form: FORM_LOGIN.NAME,
  pure: true,
})(Login);
