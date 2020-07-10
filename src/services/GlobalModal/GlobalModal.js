import React from 'react';
import { Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import BottomContainer from 'components/BottomContainer';
import LoadingModal from 'components/BaseModal/LoadingModal';
import * as types from './types';

const MODAL_LIST = {
  [types.LOADING_MODAL]: LoadingModal,
};
class GlobalModal extends React.PureComponent {
  refModal = React.createRef();

  componentDidUpdate() {
    const { isVisible, type } = this.props;
    if (type === types.TYPE_SHOW.MODAL) return;
    if (isVisible) {
      this.refModal.current && this.refModal.current.show && this.refModal.current.show();
      Keyboard.dismiss();
    } else {
      this.refModal.current && this.refModal.current.hide && this.refModal.current.hide();
    }
  }

  showBottomModal = () => {
    const { modalProps } = this.props;
    const { content, snapPoints, customStyleContainer, enableScrollContent, enableDragContent } =
      modalProps || {};
    return (
      <BottomContainer
        ref={this.refModal}
        customStyleContainer={customStyleContainer}
        enableScrollContent={enableScrollContent}
        enableDragContent={enableDragContent}
        content={content}
        snapPoints={snapPoints}
      />
    );
  };

  render() {
    const { type, modalName, isVisible, modalProps } = this.props;
    if (type === types.TYPE_SHOW.BOTTOM) return this.showBottomModal();
    const Modal = MODAL_LIST[modalName];
    if (type === types.TYPE_SHOW.MODAL) return <Modal isVisible={isVisible} {...modalProps} />;
    return null;
  }
}

GlobalModal.propTypes = {
  modalName: PropTypes.string,
  modalProps: PropTypes.shape({}),
  isVisible: PropTypes.bool,
  type: PropTypes.string,
};

GlobalModal.defaultProps = {
  modalName: '',
  modalProps: {},
  isVisible: false,
  type: types.TYPE_SHOW.BOTTOM,
};

export default GlobalModal;
