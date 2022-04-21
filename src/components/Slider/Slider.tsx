import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { IPhoto } from '../../types/photos';
import css from './slider.module.css'

interface ISlider {
    photos: IPhoto[],
    currentPhotoId: number,
    showSlider: (isShowSlider: boolean) => void
}

const Slider: React.FC<ISlider> = ({ photos, currentPhotoId, showSlider }) => {
    document.body.style.overflow = "hidden"
    return (
        <div className={css.wrapper}>
            <div className={css.slider}>
                <div
                    className={css.close}
                    onClick={() => {
                        document.body.style.overflow = "auto"
                        showSlider(false);
                    }}
                >
                    x
                </div>
                <AwesomeSlider
                    animation='cubeAnimation'
                    selected={currentPhotoId}
                    bullets={false}
                >
                    {
                        photos.map(photo => {
                            return (
                                <div key={photo.id}>
                                    <img src={photo.url} alt="img" />
                                </div>
                            )
                        })
                    }

                </AwesomeSlider>
            </div>
        </div>
    )
}

export default Slider