import * as constant from 'scenes/OrderList/constants';
import colors from 'constant/colors';

const { Order, PrinterOrder } = constant;
export const getLastNote = (notes = []) => {
  if (!notes || notes.length < 0) {
    return [];
  }
  return notes[notes.length - 1];
};

export const getColorsOrderFollow = (days) => {
  let bgColors = colors.normalFollow;
  if (Math.round(days) >= Order.FOLLOW.WARNING) {
    bgColors = colors.overFollow;
  } else if (Math.round(days) >= Order.FOLLOW.NORMAL) {
    bgColors = colors.warningFollow;
  }
  return bgColors;
};

export const getColorOrderProgressBar = (days) => {
  let colorBar = '#83fbf4';
  if (Math.round(days) >= Order.FOLLOW.WARNING) {
    colorBar = '#c0c0c0';
  } else if (Math.round(days) >= Order.FOLLOW.NORMAL) {
    colorBar = '#fc9c9c';
  }
  return colorBar;
};

export const getNextPage = (total, limit, page) => {
  const totalPage = Math.ceil(total / limit);
  if (totalPage < page) return 0;
  return page + 1;
};

export const getChildByCategory = (listCategory, tab) => {
  if (listCategory.length < 1) {
    return '';
  }
  if (listCategory[tab]) {
    const listChild = listCategory[tab];
    if (listChild.length > 0) {
      const listId = Array.from(listChild, (val) => {
        return val.id;
      });
      return listId.toString();
    }
  }
  if (tab === PrinterOrder.FILTER_CATEGORY.OTHERS) {
    const parseArrayList = Object.entries(listCategory);
    let listRestChild = [];
    parseArrayList.filter((parent) => {
      if (
        parent[0] === PrinterOrder.FILTER_CATEGORY.CARD ||
        parent[0] === PrinterOrder.FILTER_CATEGORY.STICKER ||
        parent[0] === PrinterOrder.FILTER_CATEGORY.PAPER_HAND
      ) {
        return '';
      }
      const restParent = Array.from(parent[1], (val) => {
        return val.id;
      });
      listRestChild = listRestChild.concat(restParent);
      return listRestChild;
    });
    return listRestChild.toString();
  }
  return '';
};

export const getListCategoryId = (listCategory, tab) => {
  switch (tab) {
    case PrinterOrder.TAB.CARD_ORDER:
      return getChildByCategory(listCategory, PrinterOrder.FILTER_CATEGORY.CARD);
    case PrinterOrder.TAB.STICKER:
      return getChildByCategory(listCategory, PrinterOrder.FILTER_CATEGORY.STICKER);
    case PrinterOrder.TAB.PAPER:
      return getChildByCategory(listCategory, PrinterOrder.FILTER_CATEGORY.PAPER_HAND);
    default:
      return getChildByCategory(listCategory, PrinterOrder.FILTER_CATEGORY.OTHERS);
  }
};

export const getTabByCategory = (categoryName) => {
  switch (categoryName) {
    case PrinterOrder.FILTER_CATEGORY.CARD:
      return PrinterOrder.TAB.CARD_ORDER;
    case PrinterOrder.FILTER_CATEGORY.STICKER:
      return PrinterOrder.TAB.STICKER;
    case PrinterOrder.FILTER_CATEGORY.PAPER_HAND:
      return PrinterOrder.TAB.PAPER;
    default:
      return PrinterOrder.TAB.OTHERS;
  }
};
