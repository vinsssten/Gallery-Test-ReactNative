import { Reducer } from "redux";
import { PayloadAction } from '@reduxjs/toolkit';
import { ThumbPhoto } from "../models/Images";

interface AppState {
    imageId: string | null,
    thumbsList: ThumbPhoto[]
}

const initialState: AppState = {
    imageId: null,
    thumbsList: []
}

interface AppPayload {
    imageId?: string,
    thumbsList?: ThumbPhoto[]
}

const appReducer: Reducer<AppState, PayloadAction<AppPayload>> = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_IMAGE_ID': 
            return { ...state, imageId: action.payload.imageId ?? state.imageId };
        case 'CLEAR_CURRENT_IMAGE_ID':
            return { ...state, imageId: null }
        case 'SET_THUMBS_LIST': 
            return { ...state, thumbsList: action.payload.thumbsList ?? state.thumbsList }
        default: 
            return { ...state }
    }
}

export default appReducer