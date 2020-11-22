// Actions

export function addToBasket(item) {
    return {
        type: 'ADD_TO_BASKET',
        payload: item,
    };
}

export function removeFromBasket(itemId) {
    return {
        type: 'REMOVE_FROM_BASKET',
        payload: itemId,
    };
}
