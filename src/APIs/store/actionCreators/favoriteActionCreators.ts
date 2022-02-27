export const addFavoritePhoto = (id: string) => {
    return {type: 'ADD_FAVORITE', payload: {id: id}}
}

export const removeFavoritePhoto = (id: string) => {
    return {type: 'REMOVE_FAVORITE', payload: {id: id}}
}