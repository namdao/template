import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigateScreen, resetNavigator, jumpToTab } from 'navigation/Actions/rootNavigation';
import { getListOrderDraft } from 'scenes/OrderList/redux/actions';
import { logout } from 'services/Session/actions';
import OrderListSelectors from 'scenes/OrderList/redux/selectors';

import OrderListDraft from './OrderListDraft';

const mapStateToProps = (state) => ({
  listDraft: OrderListSelectors.getListOrderDraft(state),
});

const mapDispatchToProps = (dispatch) => {
  const binActionCreators = bindActionCreators(
    {
      getListOrderDraft,
      logout,
    },
    dispatch
  );
  return {
    navigateScreen,
    resetNavigator,
    jumpToTab,
    ...binActionCreators,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderListDraft);
