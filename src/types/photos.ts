export interface IPhotosState {
    albumId: number,
    loading: boolean,
    photos: IPhoto[],
    error: string
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
    FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR'
}

interface ISetAlbumAction {
    type: PhotosActionTypes.SET_ALBUM,
    id: number
}

interface IFetchPhotos {
    type: PhotosActionTypes.FETCH_PHOTOS,
    loading: boolean
}

interface IFetchPhotosSuccess {
    type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS,
    loading: boolean,
    photos: IPhoto[]
}

interface IFetchPhotosError {
    type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
    error: string,
    loading: boolean
}

export type PhotosAction = ISetAlbumAction | IFetchPhotos | IFetchPhotosSuccess | IFetchPhotosError