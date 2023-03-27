

export const clickCard = (card) => {
    return {
        type: 'CLICK_CARD',
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