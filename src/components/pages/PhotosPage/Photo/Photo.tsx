import React from 'react';
import { IPhoto } from '../../../../types/photos';
import css from './photo.module.css'

const Photo: React.FC<IPhoto> = ({ id, title, url }) => {
    return (
        <div className={css.wrapper}>
            <img src={url} alt={title} className={css.picture} />
        </div>
    )
}

export default Photo