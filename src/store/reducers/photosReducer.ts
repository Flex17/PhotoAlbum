import { IPhotosState, PhotosAction, PhotosActionTypes } from "../../types/photos"

const initialState: IPhotosState = {
    albumId: 0,
    photos: [],
    loading: false,
    error: '',
    currentPhotoId: 0,
    isShowSlider: false
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

        case PhotosActionTypes.SET_CURRENT_PHOTO_ID:
            return {
                ...state,
                currentPhotoId: action.currentPhotoId
            }

        case PhotosActionTypes.SHOW_SLIDER:
            return {
                ...state,
                isShowSlider: action.isShowSlider
            }


        default:
            return state
    }
}

export default photosReducer