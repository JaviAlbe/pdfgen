
const initialState = {
    dataBaseCards: [
        {id: 1, title: 'Push ups', description:'This is an exercise', link:'youtube', added: false},
        {id: 2, title: 'Sit Ups', description:'This is an exercise', link:'youtube', added: false},
        {id: 3, title: 'Jumping Jacks', description:'This is an exercise', link:'youtube', added: false},
        {id: 4, title: 'Burpies', description:'This is an exercise', link:'youtube', added: false},
        {id: 5, title: 'Squats', description:'This is an exercise', link:'youtube', added: false},
    ],
    pdfCards: []
};

const cardReducer = (state = initialState, action) => {
    switch (action.type){
        case 'CLICK_CARD':
            /** Check if the clicked card is already in the pdfCards list*/
            const cardClickedId = action.payload.id
            const cardInArray = state.pdfCards.some(card => card.id === cardClickedId)

            /** If it is NOT, then add it*/
            if(!cardInArray){
                return {
                    ...state,
                    pdfCards: [...state.pdfCards, action.payload],
                }
                /** If it is, remove it*/
            } else {
                const newListOfCards = state.pdfCards.filter(card => card.id !== cardClickedId);
                return { ...state, pdfCards: newListOfCards };
            }

        case 'REMOVE_CARD':
            // const idToRemove = action.payload.id;
            // const newListOfCards = state.dataBaseCards.filter(card => card.id !== idToRemove);
            // return { ...state, pdfCards: newListOfCards };

        case 'GET_CARDS':
            return state

        default:
            return state

    }
}

export default cardReducer