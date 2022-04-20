import { connect } from 'react-redux'
import Albums from './Albums';
import { fetchAlbums } from '../../../../store/action-creators/albums';
import { RootState } from '../../../../store/reducers';
import { IAlbum } from '../../../../types/albums';
import { setAlbumId } from '../../../../store/action-creators/photos';

interface IMapStateProps {
    albums: IAlbum[],
    loading: boolean
}

interface IDispatchProps {
    fetchAlbums: () => void,
    setAlbumId: (id: number) => void
}

const mapStateToProps = (state: RootState): IMapStateProps => {
    return {
        albums: state.album.albums,
        loading: state.album.loading
    }
}

const mapDispatchToProps: IDispatchProps = {
    fetchAlbums: fetchAlbums,
    setAlbumId: setAlbumId
}

const connector = connect(mapStateToProps, mapDispatchToProps)


export default connector(Albums)