
const initialState = {
    listOfCards: []
};

const cardReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_CARD':
            return {
                ...state,
                listOfCards: [...state.listOfCards, action.payload]
            }

        case 'REMOVE_CARD':
            const idToRemove = action.payload.id;
            const newListOfCards = state.listOfCards.filter(card => card.id !== idToRemove);
            return { ...state, listOfCards: newListOfCards };

        case 'GET_CARDS':
            return state

        default:
            return state

    }
}

export default cardReducer