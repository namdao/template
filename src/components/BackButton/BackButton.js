import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/IconButton';
import styles from './styles';

const BackButton = ({ name, ...rest }) => {
  return <IconButton name={name} {...rest} iconStyles={styles.iconStyle} />;
};

BackButton.propTypes = {
  name: PropTypes.string,
};
BackButton.defaultProps = {
  name: 'ios-arrow-back',
};
export default BackButton;
