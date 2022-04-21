import { connect } from 'react-redux'
import { fetchPhotos, setCurrentPhotoId, showSlider } from '../../../../store/action-creators/photos';
import { RootState } from '../../../../store/reducers';
import { IPhoto } from '../../../../types/photos';
import Photos from './Photos';

interface IMapStateToProps {
    photos: IPhoto[],
    loading: boolean,
    error: string,
    albumId: number,
    currentPhotoId: number,
    isShowSlider: boolean
}

interface IDispatchToProps {
    fetchPhotos: (albumId: number) => void,
    setCurrentPhotoId: (id: number) => void,
    showSlider: (isShowSlider: boolean) => void
}

const mapStateToProps = (state: RootState): IMapStateToProps => {
    return {
        photos: state.photos.photos,
        loading: state.photos.loading,
        error: state.photos.error,
        albumId: state.photos.albumId,
        currentPhotoId: state.photos.currentPhotoId,
        isShowSlider: state.photos.isShowSlider
    }
}

const mapDispatchToProps: IDispatchToProps = {
    fetchPhotos: fetchPhotos,
    setCurrentPhotoId: setCurrentPhotoId,
    showSlider: showSlider
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)


export default connector(Photos)