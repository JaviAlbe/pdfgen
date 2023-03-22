

export const addCard = (card) => {
    return {
        type: 'ADD_CARD',
        payload: card
    }
}

export const removeCard = (card) => {
    return {
        type: 'REMOVE_CARD',
        payload: card
    }
}

export const getCards = () => {
    return {
        type:'GET_CARDS',
    }
}