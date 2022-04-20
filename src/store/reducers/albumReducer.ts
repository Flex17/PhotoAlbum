import {
    AlbumAction,
    AlbumsActionTypes,
    IAlbumState,
} from "../../types/albums"

const initialState: IAlbumState = {
    albums: [],
    loading: false,
    error: ''
}

const albumReducer = (state = initialState, action: AlbumAction): IAlbumState => {
    switch (action.type) {
        case AlbumsActionTypes.FETCH_ALBUMS:
            return {
                ...state,
                loading: true
            }

        case AlbumsActionTypes.FETCH_ALBUMS_SUCCESS:
            return {
                ...state,
                loading: false,
                albums: action.albums
            }

        case AlbumsActionTypes.FETCH_ALBUMS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state
    }
}

export default albumReducer