export const SAVE_CART = "SAVE_CART";
export const SHOW_CART = "SHOW_CART";

export const saveCart = (cart) => (dispatch) => {
    dispatch({
        type: SAVE_CART,
        payload: cart,
    });
};

export const showCart = (show) => (dispatch) => {
    dispatch({
        type: SHOW_CART,
        payload: show,
    });
};


