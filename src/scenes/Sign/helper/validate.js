import * as utils from 'utils/utility';
import { l10n } from 'languages';

const validEmailUser = (value) => {
  return !utils.validEmail(value) ? l10n.error_email : undefined;
};
const requiredField = (value) => {
  return !utils.required(value) ? l10n.require_field : undefined;
};
const validPassword = (value) => {
  return !utils.minLength(6, value) ? l10n.error_min_password : undefined;
};
export default {
  requiredField,
  validEmailUser,
  validPassword,
};
