import * as Yup from 'yup';
import { l10n } from 'languages';

const onValidConfirmOrder = () =>
  Yup.object().shape({
    note: Yup.string().required(l10n.require_field),
  });

export default {
  onValidConfirmOrder,
};
