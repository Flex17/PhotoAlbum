import { connect } from 'react-redux'
import { fetchPhotos } from '../../../../store/action-creators/photos';
import { RootState } from '../../../../store/reducers';
import { IPhoto } from '../../../../types/photos';
import Photos from './Photos';

interface IMapStateToProps {
    photos: IPhoto[],
    loading: boolean,
    error: string,
    albumId: number
}

interface IDispatchToProps {
    fetchPhotos: (albumId: number) => void
}

const mapStateToProps = (state: RootState): IMapStateToProps => {
    return {
        photos: state.photos.photos,
        loading: state.photos.loading,
        error: state.photos.error,
        albumId: state.photos.albumId
    }
}

const mapDispatchToProps: IDispatchToProps = {
    fetchPhotos: fetchPhotos
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)


export default connector(Photos)