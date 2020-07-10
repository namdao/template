import React from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import colors from 'constant/colors';
import { DropDownHelper } from './DropDownHelper';

const DropDownMessage = () => {
  return (
    <DropdownAlert
      ref={(ref) => DropDownHelper.setDropDown(ref)}
      onClose={() => DropDownHelper.invokeOnClose()}
      successColor={colors.mainBlue2}
      closeInterval={3000}
    />
  );
};

export default DropDownMessage;
