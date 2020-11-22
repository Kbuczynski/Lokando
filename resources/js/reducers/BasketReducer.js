let items = [];
if (sessionStorage.getItem('basket')) {
    items = JSON.parse(sessionStorage.getItem('basket'));
}

const initialState = {
    items: items
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET': {
            // console.log(state.items, action.payload);
            const newItems = [...state.items, action.payload];
            sessionStorage.setItem('basket', JSON.stringify(newItems));
            return {
                items: newItems,
            };
        }
        case 'REMOVE_FROM_BASKET': {
            let newItems = [...state.items];
            let index = newItems.findIndex(x => x.id === action.payload);
            newItems.splice(index, 1);

            sessionStorage.setItem('basket', JSON.stringify(newItems));

            return {
                items: newItems,
            };
        }
        default: {
            return state;
        }
    }
};
