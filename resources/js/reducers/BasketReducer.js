const initialState = [
    {
        id: '123',
        title: 'Blue t-shirt',
        desc: 'No fancy sizing charts here, one t-shirt size to rule them all',
        img: '/blue-tshirt.png',
        price: 399
    }
];

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET': {
            return {
                ...state,
                basket: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
