import { combineReducers } from "redux";
import albumReducer from "./albumReducer";
import photosReducer from "./photosReducer";

export const rootReducer = combineReducers({
    album: albumReducer,
    photos: photosReducer
})

export type RootState = ReturnType<typeof rootReducer>