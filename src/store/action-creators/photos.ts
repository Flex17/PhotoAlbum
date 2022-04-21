import { Dispatch } from "redux";
import axios from "axios";
import { PhotosAction, PhotosActionTypes } from "../../types/photos";

export const fetchPhotos = (albumId: number) => {
    return async (dispatch: Dispatch<PhotosAction>) => {
        try {
            dispatch({
                type: PhotosActionTypes.FETCH_PHOTOS,
                loading: true
            })
            await axios
                .get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
                .then(response => {
                    dispatch({
                        type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS,
                        loading: false,
                        photos: response.data
                    })
                })
        } catch (e) {
            dispatch({
                type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
                error: 'Ошибка при загрузке данных с сервера',
                loading: false
            })
        }
    }
}

export const setAlbumId = (id: number): PhotosAction => {
    return {
        type: PhotosActionTypes.SET_ALBUM,
        id: id
    }
}

export const setCurrentPhotoId = (id: number): PhotosAction => {
    return {
        type: PhotosActionTypes.SET_CURRENT_PHOTO_ID,
        currentPhotoId: id
    }
}

export const showSlider = (isShowSlider: boolean): PhotosAction => {
    return {
        type: PhotosActionTypes.SHOW_SLIDER,
        isShowSlider: isShowSlider
    }
}