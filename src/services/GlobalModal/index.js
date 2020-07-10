import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GlobalModalSeletor from './selectors';
import { hideModal, clearModal } from './actions';
import GlobalModal from './GlobalModal';

const mapStateToProps = (state) => ({
  isVisible: GlobalModalSeletor.getIsVisible(state),
  modalName: GlobalModalSeletor.getModalName(state),
  modalProps: GlobalModalSeletor.getModalProps(state),
  type: GlobalModalSeletor.getType(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ hideModal, clearModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GlobalModal);
