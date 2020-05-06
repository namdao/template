import React, { PureComponent } from 'react';
import { CardHolder } from 'components/PlaceHolder';

export default class OrderListDraft extends PureComponent {
  render() {
    return (
      <>
        <CardHolder />
        <CardHolder />
        <CardHolder />
        <CardHolder />
      </>
    );
  }
}
