import { PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "redux"

interface FavoriteState {
    favoriteIdsList: string[]
}

interface FavoriteStorePayload {
    id: string
}

const initialState: FavoriteState = {
    favoriteIdsList: []
};


const favoriteReducer: Reducer<FavoriteState, PayloadAction<FavoriteStorePayload>> = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE': 
            return {...state, favoriteIdsList: [...state.favoriteIdsList, action.payload.id]};
        case 'DELETE_FAVORITE_BY_ID':
            const list: string[] = state.favoriteIdsList.slice();
            list.forEach((id, index) => {
                if (id === action.payload.id) {
                    list.splice(index, 1);
                }
            })
            return { ...state, favoriteIdsList: list };
            
        default: 
            return {...state}
    }
}

export default favoriteReducer