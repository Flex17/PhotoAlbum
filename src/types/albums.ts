export interface IAlbumState {
    albums: IAlbum[],
    loading: boolean,
    error: string
}

export interface IAlbum {
    id: number,
    userId: number,
    title: string,
    setAlbumId: (id: number) => void
}

export enum AlbumsActionTypes {
    FETCH_ALBUMS = 'FETCH_ALBUMS',
    FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS',
    FETCH_ALBUMS_ERROR = 'FETCH_ALBUMS_ERROR'
}

interface FetchAlbumsAction {
    type: AlbumsActionTypes.FETCH_ALBUMS
}

interface FetchAlbumsSuccessAction {
    type: AlbumsActionTypes.FETCH_ALBUMS_SUCCESS,
    albums: IAlbum[]
}

interface FetchAlbumsErrorAction {
    type: AlbumsActionTypes.FETCH_ALBUMS_ERROR,
    error: string
}

export type AlbumAction = FetchAlbumsAction | FetchAlbumsSuccessAction | FetchAlbumsErrorAction