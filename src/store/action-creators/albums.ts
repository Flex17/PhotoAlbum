import { Dispatch } from "redux";
import axios from "axios";
import { AlbumAction, AlbumsActionTypes } from "../../types/albums";

export const fetchAlbums = () => {
    return async (dispatch: Dispatch<AlbumAction>) => {
        try {
            dispatch({ type: AlbumsActionTypes.FETCH_ALBUMS })
            await axios
                .get('https://jsonplaceholder.typicode.com/albums')
                .then(response => {
                    dispatch({ type: AlbumsActionTypes.FETCH_ALBUMS_SUCCESS, albums: response.data })
                })
        } catch (e) {
            dispatch({
                type: AlbumsActionTypes.FETCH_ALBUMS_ERROR,
                error: 'Ошибка при загрузке данных с сервера'
            })
        }
    }
}