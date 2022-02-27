import { combineReducers, createStore } from "redux";
import appReducer from "./appReducer";
import favoriteReducer from './favoriteReducer';

const reducers = combineReducers({
    favorite: favoriteReducer,
    app: appReducer
})

const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store