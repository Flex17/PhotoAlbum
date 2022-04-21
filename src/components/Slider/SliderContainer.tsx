import { connect } from 'react-redux'
import { showSlider } from '../../store/action-creators/photos';
import { RootState } from '../../store/reducers';
import { IPhoto } from '../../types/photos';
import Slider from './Slider';

interface IMapStateProps {
    photos: IPhoto[],
    currentPhotoId: number,
}

interface IMapDispatchProps {
    showSlider: (isShowSlider: boolean) => void
}

const mapStateToProps = (state: RootState): IMapStateProps => {
    return {
        photos: state.photos.photos,
        currentPhotoId: state.photos.currentPhotoId,
    }
}

const mapDispatchToProps: IMapDispatchProps = {
    showSlider: showSlider
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)


export default connector(Slider)