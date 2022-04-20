import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AlbumsContainer from '../pages/AlbumsPage/Albums/AlbumsContainer';
import PhotosContainer from '../pages/PhotosPage/Photos/PhotosContainer';

const App: React.FC = () => {
	return (
		<div className='container'>
			<Routes>
				<Route
					path='/'
					element={<AlbumsContainer />}
				/>
				<Route
					path='/photos:id'
					element={<PhotosContainer />}
				/>
			</Routes>
		</div>
	)
}

export default App
