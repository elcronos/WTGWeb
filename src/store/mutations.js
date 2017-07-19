export const OPEN_DIALOG = state =>  state.visibleDialog = true;
export const CLOSE_DIALOG = state =>  state.visibleDialog = false;
export const ADD_PRODUCT = (state, { product }) => state.products.push({product});
export const REMOVE_PRODUCT  = (state, { product }) => {state.products = state.products.filter(p => { p.id !== product.id})};
