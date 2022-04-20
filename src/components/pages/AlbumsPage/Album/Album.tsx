import React from 'react';
import { IAlbum } from '../../../../types/albums';
import css from './album.module.css'
import { NavLink } from 'react-router-dom';

const Album: React.FC<IAlbum> = ({ id, userId, title, setAlbumId }) => {
    return (
        <NavLink
            to={`/photos${id}`}
            className={css.wrapper}
            onClick={() => { setAlbumId(id) }}
        >
            <div className={css.id}>
                {id}
            </div>
            <div className={css.title}>
                {title}
            </div>
        </NavLink>
    )
}

export default Album