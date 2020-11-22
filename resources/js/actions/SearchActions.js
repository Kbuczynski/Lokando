// Actions

export function changeSearch(phrase, category) {
    return {
        type: 'CHANGE_SEARCH',
        payload: {phrase: phrase, category: category},
    };
}
