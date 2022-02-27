import { Reducer } from "redux";
import { PayloadAction } from '@reduxjs/toolkit';

interface AppState {
    imageId: string | null,
}

const initialState: AppState = {
    imageId: null
}

const appReducer: Reducer<AppState, PayloadAction<AppState>> = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_IMAGE_ID': 
            console.log('setCurrentImageID', action.payload.imageId)
            return { ...state, imageId: action.payload.imageId };
        case 'CLEAR_CURRENT_IMAGE_ID':
            console.log('clear id')
            return { ...state, imageId: null }
        default: 
            return { ...state }
    }
}

export default appReducer