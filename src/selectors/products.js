const productsSelectors = {
  getProducts: (state) => state.productsReducers.products,
  loading: (state) => state.productsReducers.loading,
  error: (state) => state.productsReducers.error,
  getSearchNameValue: (state) => state.productsReducers.name,
  getFilteredItems: (state) => state.productsReducers.filteredItems,
  getSelectedSize: (state) => state.productsReducers.selectedSize,
  showAddCartAlert: (state) => state.productsReducers.showAddCartAlert,
  hideAddCartAlert: (state) => state.productsReducers.hideAddCartAlert,
};

export { productsSelectors };
