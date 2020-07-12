import React, { PureComponent } from 'react';
import { CardHolder } from 'components/PlaceHolder';
import CommonButton from 'components/CommonButton';

export default class OrderListDraft extends PureComponent {
  render() {
    const { logout } = this.props;
    return (
      <>
        <CommonButton onPress={() => logout()} title="dang xuat" />
        <CardHolder />
        <CardHolder />
        <CardHolder />
        <CardHolder />
      </>
    );
  }
}
