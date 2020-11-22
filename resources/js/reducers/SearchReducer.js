const initialState = {
    phrase: '',
    category: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH': {
            return {
                phrase: action.payload.phrase,
                category: action.payload.category
            };
        }
        default: {
            return state;
        }
    }
};
