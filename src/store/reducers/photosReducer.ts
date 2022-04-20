import { IPhotosState, PhotosAction, PhotosActionTypes } from "../../types/photos"

const initialState: IPhotosState = {
    albumId: 0,
    photos: [],
    loading: false,
    error: ''
}

const photosReducer = (state = initialState, action: PhotosAction): IPhotosState => {
    switch (action.type) {
        case PhotosActionTypes.SET_ALBUM:
            return {
                ...state,
                albumId: action.id
            }

        case PhotosActionTypes.FETCH_PHOTOS:
            return {
                ...state,
                loading: true
            }

        case PhotosActionTypes.FETCH_PHOTOS_SUCCESS:
            return {
                ...state,
                loading: false,
                photos: action.photos
            }


        case PhotosActionTypes.FETCH_PHOTOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }


        default:
            return state
    }
}

export default photosReducer