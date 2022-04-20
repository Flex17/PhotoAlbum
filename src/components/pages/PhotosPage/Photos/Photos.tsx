import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPhotosState } from '../../../../types/photos';
import Photo from '../Photo/Photo';
import css from './photos.module.css'

interface IPhotos extends IPhotosState {
    fetchPhotos: (albumId: number) => void
}

const Photos: React.FC<IPhotos> = ({ photos, loading, error, albumId, fetchPhotos }) => {

    const navigate = useNavigate()

    useEffect(() => {
        fetchPhotos(albumId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <button
                className={css.navigate}
                onClick={() => { navigate('/') }}
            >
                Go home
            </button>
            <h1>Photos</h1>
            {
                loading ?
                    <span className={css.loading}>Загрузка...</span>
                    :
                    <div className={css.wrapper}>
                        {
                            photos.map(photo => {
                                return (
                                    <Photo
                                        key={photo.id}
                                        title={photo.title}
                                        url={photo.url}
                                        id={photo.id}
                                    />
                                )
                            })
                        }
                    </div>
            }
        </>
    )
}

export default Photos