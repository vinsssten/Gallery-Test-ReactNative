import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../App";
import { addFavoritePhoto, removeFavoritePhoto } from "../store/actionCreators/favoriteActionCreators";

function useFavoritePhoto (idArg?: string) {
    const [isFavoriteState, setIsFavoriteState] = useState<boolean>(false);
    const favoriteList = useAppSelector(state => state.favorite.favoriteIdsList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (idArg) {
            isFavoritePhoto(idArg);
        }
    }, [favoriteList]);

    function favoritePhoto (id: string | null) {
        if (id) {
            isFavoritePhoto(id);
            if (!isFavoriteState) {
                dispatch(addFavoritePhoto(id));
            } else {
                dispatch(removeFavoritePhoto(id));
            }
        }
    }

    function isFavoritePhoto (id: string | null): boolean {
        if (id) {
            for (let i = 0; i < favoriteList.length; i++) {
                if (favoriteList[i] === id) {
                    setIsFavoriteState(true);
                    return true
                }
            }
            
            setIsFavoriteState(false);
            return false
        }
        setIsFavoriteState(false);
        return false
    }

    function isFavoritePhotoWithoutUpdate (id: string): boolean {
        for (let i = 0; i < favoriteList.length; i++) {
            if (favoriteList[i] === id) {
                return true
            }
        }

        return false
    }

    return {isFavorite: isFavoriteState, favoritePhoto, isFavoritePhoto, isFavoritePhotoWithoutUpdate}
}

export default useFavoritePhoto