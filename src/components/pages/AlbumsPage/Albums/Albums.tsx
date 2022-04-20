import React, { useEffect } from 'react';
import { IAlbum } from '../../../../types/albums';
import Album from '../Album/Album';
import css from './albums.module.css'

interface IAlbums {
    albums: IAlbum[],
    loading: boolean,
    fetchAlbums: () => void,
    setAlbumId: (id: number) => void
}

const Albums: React.FC<IAlbums> = ({ albums, loading, fetchAlbums, setAlbumId }) => {

    useEffect(() => {
        fetchAlbums()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <h1 className={css.title}>
                Albums
            </h1>
            {
                loading ?
                    <span className={css.loading}>Загрузка...</span>
                    :
                    <div className={css.wrapper}>
                        {
                            albums.map(album => {
                                return (
                                    <Album
                                        key={album.id}
                                        setAlbumId={setAlbumId}
                                        id={album.id}
                                        userId={album.userId}
                                        title={album.title}
                                    />
                                )
                            })
                        }
                    </div>
            }
        </>
    )
}

export default Albums