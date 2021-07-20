export const SAVE_ITEMS = "SAVE_ITEMS";

export const saveItems = (total) => (dispatch) => {
    dispatch({
        type: SAVE_ITEMS,
        payload: total,
    });
};


