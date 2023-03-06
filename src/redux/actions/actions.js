

export const addCard = (card) => {
    return {
        type: 'ADD_CARD',
        payload: card
    }
}

export const removeCard = () => {
    return {
        type: 'REMOVE_CARD',
    }
}

export const getCards = () => {
    return {
        type:'GET_CARDS',
    }
}