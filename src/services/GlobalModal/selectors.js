const getIsVisible = (state) => state.services.globalModal.isVisible;
const getModalName = (state) => state.services.globalModal.modalName;
const getModalProps = (state) => state.services.globalModal.modalProps;
const getType = (state) => state.services.globalModal.type;
const GlobalModalSeletor = {
  getIsVisible,
  getModalName,
  getModalProps,
  getType,
};

export default GlobalModalSeletor;
