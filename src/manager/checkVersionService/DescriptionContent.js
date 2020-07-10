import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
// import { l10n } from 'languages';
import styles from './styles';
import { UPDATE_MODE } from './constants';

const DescriptionContent = ({ updateMode, codePushDescription }) => {
  if (updateMode === UPDATE_MODE.STORE) {
    return (
      <View style={styles.descriptionWrapper}>
        <Text style={styles.timeToUpdateTitle}>Đã đến lúc cập nhật</Text>
        <Text style={styles.forceUpdateDescription}>Bắt buộc cập nhật</Text>
      </View>
    );
  }
  if (updateMode === UPDATE_MODE.CODE_PUSH) {
    return (
      <View style={styles.descriptionWrapper}>
        <Text style={styles.timeToUpdateTitle}>Đã đến lúc cập nhật</Text>
        <Text style={styles.codePushUpdateDescription}>{codePushDescription}</Text>
      </View>
    );
  }
  return null;
};

DescriptionContent.propTypes = {
  updateMode: PropTypes.string,
  codePushDescription: PropTypes.string,
};

DescriptionContent.defaultProps = {
  updateMode: '',
  codePushDescription: '',
};

export default DescriptionContent;
