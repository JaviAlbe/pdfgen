
const initialState = {
    listOfCards: [{title:'Hello', description:'this is a chachicription'}]
};

const cardReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_CARD':
            return {
                ...state,
                listOfCards: [...state.listOfCards, action.payload]
            }

        case 'REMOVE_CARD':
            if(state.length > 0){
                return state.pop()
            } else break

        case 'GET_CARDS':
            return state

        default:
            return state

    }
}

export default cardReducer