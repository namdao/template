import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { doNothing } from 'utils/utility';

class Form extends PureComponent {
  constructor(props) {
    super(props);
    const { initialValues } = this.props;
    this.initialValues = initialValues || {};
  }

  validateForm = (values) => {
    const { validateForm } = this.props;
    const errors = validateForm(values);
    return errors;
  };

  submitForm = (values, action) => {
    const { onSubmit } = this.props;
    onSubmit(values, action);
  };

  render() {
    const { children, isValidManual, validationSchema } = this.props;
    return (
      <Formik
        validate={isValidManual ? this.validateForm : null}
        validationSchema={validationSchema}
        initialValues={this.initialValues}
        onSubmit={this.submitForm}
      >
        {(propsForm) => children(propsForm)}
      </Formik>
    );
  }
}
Form.propTypes = {
  isValidManual: PropTypes.bool,
  validationSchema: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.func,
  validateForm: PropTypes.func,
  initialValues: PropTypes.shape({}),
};

Form.defaultProps = {
  isValidManual: false,
  validationSchema: null,
  onSubmit: doNothing,
  children: doNothing,
  validateForm: doNothing,
  initialValues: {},
};

export default Form;
