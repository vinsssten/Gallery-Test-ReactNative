import React, { useEffect, useMemo, useState } from 'react';
import useImages from '../../APIs/hooks/useImages';
import ImagesList from '../ImagesList';
import { ThumbPhoto } from '../../APIs/models/Images';
import useFavoritePhoto from '../../APIs/hooks/useFavoritePhoto';
import { useAppSelector } from '../../../App';

export default function FavoriteComponent() {
    const { thumbsList } = useImages();
    const favoriteIdsList = useAppSelector(state => state.favorite.favoriteIdsList)
    const { isFavoritePhotoWithoutUpdate } = useFavoritePhoto();
    const [favoriteThumbs, setFavoriteThumbs] = useState<ThumbPhoto[]>([]);

    useMemo(() => {
        const favoriteList = generateFavoriteList(thumbsList);
        if (favoriteList) {
            setFavoriteThumbs(favoriteList);
        }
    }, [thumbsList, favoriteIdsList])

    function generateFavoriteList (thumbsListL: typeof thumbsList) {
        const favoriteList: typeof thumbsListL = [] 
        thumbsListL.forEach((item) => {
            if (isFavoritePhotoWithoutUpdate(item.id)) {
                favoriteList.push(item);
            }
        })
        return favoriteList;
    }

    return (
        <ImagesList thumbsList={favoriteThumbs} />
    )
}