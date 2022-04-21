export interface IPhotosState {
    albumId: number,
    loading: boolean,
    photos: IPhoto[],
    error: string,
    currentPhotoId: number,
    isShowSlider: boolean
}

export interface IPhoto {
    id: number,
    title: string,
    url: string,
    thumbnailUrl?: string
}

export enum PhotosActionTypes {
    SET_ALBUM = 'SET_ALBUM',
    FETCH_PHOTOS = 'FETCH_PHOTOS',
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
    FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',
    SET_CURRENT_PHOTO_ID = 'SET_CURRENT_PHOTO_ID',
    SHOW_SLIDER = 'SHOW_SLIDER'
}

interface ISetAlbumAction {
    type: PhotosActionTypes.SET_ALBUM,
    id: number
}

interface IFetchPhotosAction {
    type: PhotosActionTypes.FETCH_PHOTOS,
    loading: boolean
}

interface IFetchPhotosSuccessAction {
    type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS,
    loading: boolean,
    photos: IPhoto[]
}

interface IFetchPhotosErrorAction {
    type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
    error: string,
    loading: boolean
}

interface ISetCurrentPhotoIdAction {
    type: PhotosActionTypes.SET_CURRENT_PHOTO_ID,
    currentPhotoId: number
}

interface IShowSliderAction {
    type: PhotosActionTypes.SHOW_SLIDER,
    isShowSlider: boolean
}

export type PhotosAction =
    ISetAlbumAction |
    IFetchPhotosAction |
    IFetchPhotosSuccessAction |
    IFetchPhotosErrorAction |
    ISetCurrentPhotoIdAction |
    IShowSliderAction