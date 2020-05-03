import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/IconButton';

const BackButton = ({ name, ...rest }) => {
  return <IconButton name={name} {...rest} />;
};

BackButton.propTypes = {
  name: PropTypes.string,
};
BackButton.defaultProps = {
  name: 'arrowleft',
};
export default BackButton;
