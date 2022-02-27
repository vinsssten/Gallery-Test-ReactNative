import { PayloadAction } from '@reduxjs/toolkit';
import { ThumbPhoto } from '../../models/Images';

export const setCurrentPhotoId = (id: string): PayloadAction<any> => {
    return { type: 'SET_CURRENT_IMAGE_ID', payload: {imageId: id} }
}

export const clearCurrentPhotoId = () => {
    return {type: 'CLEAR_CURRENT_IMAGE_ID', payload: {imageId: null}}
}

export const setThumbsList = (thumbsList: ThumbPhoto[]) => {
    return {type: 'SET_THUMBS_LIST', payload: {thumbsList: thumbsList}}
}

export const removePhotoFromThumbs = (id: string) => {
    return {type: 'REMOVE_PHOTO_FROM_THUMBS', payload: {imageId: id}}
}