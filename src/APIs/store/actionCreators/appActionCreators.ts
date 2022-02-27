import { PayloadAction } from '@reduxjs/toolkit';

export const setCurrentPhotoId = (id: string): PayloadAction<any> => {
    return { type: 'SET_CURRENT_IMAGE_ID', payload: {imageId: id} }
}

export const clearCurrentPhotoId = () => {
    return {type: 'CLEAR_CURRENT_IMAGE_ID', payload: {imageId: null}}
}