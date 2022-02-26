import { createApi,  } from 'unsplash-js'
import nodeFetch from 'node-fetch'
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { PhotoResponse, ThumbPhoto } from '../models/Images';
import { useEffect, useState } from 'react';


const api = createApi({
    accessKey: 'OSDDjNyL1uycUh9jWQ2HNCImOKuzabVKMXKrXElaGJA',
})

function useImages () {
    const [thumbsList, setThumbsList] = useState<ThumbPhoto[]>([]);
    const [isLoadingThumbs, setIsLoadingThumbs] = useState<boolean>(false);

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
            imagesList.response.results.forEach((item: PhotoResponse) => {
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
            

    return { thumbsList, isLoadingThumbs, getThumbs }
}

export default useImages