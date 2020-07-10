import React, { Component } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { CardHolder } from 'components/PlaceHolder';
import Spacing from 'components/Spacing';
import { doNothing } from 'utils/utility';
import EmptyBox from 'components/Empty';
import { getNextPage } from 'scenes/OrderList/helper/order';
import { Order } from 'scenes/OrderList/constants';
import FlatListFooter from './FlatListFooter';

class FlatListDefault extends Component {
  constructor(props) {
    super(props);
    this.currentPage = 1;
    this.totalItem = 0;
    this.footerRef = React.createRef();
    this.listRef = null;
  }

  componentDidMount() {
    this.refreshList();
  }

  shouldComponentUpdate(nextProps) {
    const { isLoading: nextIsLoading, dataList: nextDataList } = nextProps;
    const { isLoading, dataList } = this.props;
    if (isLoading !== nextIsLoading || dataList !== nextDataList) {
      return true;
    }
    return false;
  }

  refreshList = (refreshing = false) => {
    const { getListOrder } = this.props;
    getListOrder({ refreshing, callbackSuccess: this.callback });
  };

  callback = () => {
    this.setLoadingFooter(false);
  };

  setLoadingFooter = (status) => {
    this.footerRef.current &&
      this.footerRef.current.loadingSuccess &&
      this.footerRef.current.loadingSuccess(status);
  };

  onRefresh = () => {
    this.initConfigList();
    this.refreshList(true);
  };

  initConfigList = () => {
    this.currentPage = 1;
    this.totalItem = 0;
  };

  renderHeader = () => {
    const { isLoading } = this.props;
    if (!isLoading) return <Spacing />;
    this.initConfigList();
    return (
      <>
        <CardHolder />
        <CardHolder />
        <CardHolder />
        <CardHolder />
      </>
    );
  };

  renderFooter = () => {
    return <FlatListFooter ref={this.footerRef} />;
  };

  emptyList = () => {
    const { emptyTitle } = this.props;
    return <EmptyBox text={emptyTitle} />;
  };

  navigateToDetail = (item, params) => {
    const { navigateScreen, setDataOrder, fromPage = null, stackScreen } = this.props;
    setDataOrder(item);
    navigateScreen(stackScreen, { fromPage, params });
  };

  renderItem = ({ item, index }) => {
    const { renderItems } = this.props;
    return renderItems({
      item,
      index,
      navigateToDetail: this.navigateToDetail,
      onMoveItem: this.onMoveItem,
    });
  };

  onMoveItem = (moveEnd) => {
    if (moveEnd) {
      this.listRef.getScrollResponder().setNativeProps({
        scrollEnabled: false,
      });
    } else {
      this.listRef.getScrollResponder().setNativeProps({
        scrollEnabled: true,
      });
    }
  };

  separator = () => {
    return <Spacing />;
  };

  keyExtractor = (item) => item.id.toString();

  loadMorePage = () => {
    const { dataList, getListOrder, totalPage } = this.props;
    const totalCurrentItem = dataList.length;
    const nextPage = getNextPage(totalPage, Order.PER_PAGE.DEFAULT, this.currentPage);
    if (nextPage > 0 && this.currentPage !== nextPage && this.totalItem !== totalCurrentItem) {
      this.totalItem = totalCurrentItem;
      this.currentPage = nextPage;
      this.setLoadingFooter(true);
      getListOrder({
        nextPage: this.currentPage,
        callbackSuccess: this.callback,
      });
    }
  };

  render() {
    const { dataList } = this.props;
    return (
      <FlatList
        ref={(ref) => {
          this.listRef = ref;
        }}
        data={dataList}
        ListHeaderComponent={this.renderHeader}
        ListEmptyComponent={this.emptyList}
        ListFooterComponent={this.renderFooter}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={this.separator}
        refreshControl={<RefreshControl refreshing={false} onRefresh={this.onRefresh} />}
        onEndReached={this.loadMorePage}
        onEndReachedThreshold={3}
        {...this.props}
      />
    );
  }
}
FlatListDefault.propTypes = {
  isLoading: PropTypes.bool,
  dataList: PropTypes.oneOfType(PropTypes.shape([]), PropTypes.shape(null)),
  emptyTitle: PropTypes.string,
  navigateScreen: PropTypes.func,
  setDataOrder: PropTypes.func,
  getListOrder: PropTypes.func,
  totalPage: PropTypes.number,
  fromPage: PropTypes.string,
  stackScreen: PropTypes.string,
  renderItems: PropTypes.func,
};
FlatListDefault.defaultProps = {
  isLoading: false,
  dataList: [],
  emptyTitle: '',
  navigateScreen: doNothing,
  setDataOrder: doNothing,
  getListOrder: doNothing,
  totalPage: 0,
  fromPage: '',
  stackScreen: '',
  renderItems: doNothing,
};
export default FlatListDefault;
