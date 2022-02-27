import { createApi,  } from 'unsplash-js'
import nodeFetch from 'node-fetch'
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { ThumbPhotoResponse, ThumbPhoto, FullSizePhoto } from '../models/Images';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../App';
import { addFavoritePhoto, removeFavoritePhoto } from '../store/actionCreators/favoriteActionCreators';


const api = createApi({
    accessKey: 'OSDDjNyL1uycUh9jWQ2HNCImOKuzabVKMXKrXElaGJA',
})

function useImages () {
    const [thumbsList, setThumbsList] = useState<ThumbPhoto[]>([]);
    const [isLoadingThumbs, setIsLoadingThumbs] = useState<boolean>(false);

    const [curPhoto, setCurPhoto] = useState<FullSizePhoto | null>(null);
    const [isLoadingPhoto, setIsLoadingPhoto] = useState<boolean>(true);
    const [isFavoriteState, setIsFavoriteState] = useState<boolean>(false);

    const favoriteList = useAppSelector(state => state.favorite.favoriteIdsList);
    const dispatch = useAppDispatch();

    async function getThumbs () {
        console.log('loading thumbs')
        try {
            const imagesList: ApiResponse<any> = await api.photos.list({
                page: 1,
                perPage: 30
            })
            if (imagesList.type === 'error') {
                console.log(imagesList.errors) 
            }

            const thumbsList: ThumbPhoto[] = [];
            console.log(imagesList)
            imagesList.response.results.forEach((item: ThumbPhotoResponse) => {
                thumbsList.push({
                    id: item.id,
                    url: item.urls.thumb
                })
            })
            
            setIsLoadingThumbs(true);
            setThumbsList(thumbsList);
            return imagesList;
        } catch (error) {
            setIsLoadingThumbs(true)
            console.log('error', error)
        }
    }

    async function getPhotoById (id: string) {
        console.log(`Try to get photo by id: ${id}`)
        try {
            const responsePhoto = await api.photos.get({photoId: id});

            if (!responsePhoto.response) {
                return
            } else {
                console.log('Photo response received');
                setCurPhoto({
                    uri: responsePhoto.response.urls.full,
                    width: responsePhoto.response.width,
                    height: responsePhoto.response.height,
                });
                setIsLoadingPhoto(false);
            }
        } catch (error) {
            console.log('Loading full size photo error', error);
        }
    }

    function favoritePhoto (id: string | null) {
        if (id) {
            isFavoritePhoto(id);
            if (!isFavoriteState) {
                dispatch(addFavoritePhoto(id));
                setIsFavoriteState(true)
            } else {
                dispatch(removeFavoritePhoto(id));
                setIsFavoriteState(false);
            }
        }
    }

    function isFavoritePhoto (id: string | null): void {
        if (id) {
            for (let i = 0; i < favoriteList.length; i++) {
                if (favoriteList[i] === id) {
                    setIsFavoriteState(true);
                    break
                }
            }
            
            setIsFavoriteState(false);
        }
        setIsFavoriteState(false);
    }
            

    return { thumbsList, isLoadingThumbs, curPhoto, isLoadingPhoto, isFavorite: isFavoriteState, getThumbs, getPhotoById, favoritePhoto, isFavoritePhoto }
}

export default useImages