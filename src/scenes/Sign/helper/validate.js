import * as Yup from 'yup';
import FormConstants from 'scenes/Sign/constants/formConstants';
import { l10n } from 'languages';

const { FORM_LOGIN } = FormConstants;
const { FIELDS } = FORM_LOGIN;

const onValidLogin = () =>
  Yup.object().shape({
    [FIELDS.PASSWORD]: Yup.string().min(6, l10n.error_min_password).required(l10n.require_field),
    [FIELDS.IDENTITY]: Yup.string().email(l10n.error_email).required(l10n.require_field),
  });

export default {
  onValidLogin,
};
