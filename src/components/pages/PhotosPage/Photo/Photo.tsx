import React from 'react';
import { IPhoto } from '../../../../types/photos';
import css from './photo.module.css'

interface IPhotoProps extends IPhoto {
    setCurrentPhotoId: (id: number) => void,
    showSlider: (isShowSlider: boolean) => void
}

const Photo: React.FC<IPhotoProps> = ({ id, title, url, setCurrentPhotoId, showSlider }) => {
    const idx = id <= 50 ? id - 1 : id - Math.floor(id / 50) * 50 - 1

    return (
        <div
            onClick={() => {
                setCurrentPhotoId(idx);
                showSlider(true);
            }}
            className={css.wrapper}
        >
            <img src={url} alt={title} className={css.picture} />
        </div>
    )
}

export default Photo