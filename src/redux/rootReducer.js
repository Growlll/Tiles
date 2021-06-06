import {combineReducers} from 'redux';
import {tilesReducer} from './tilesReducer';

export const rootReducer = combineReducers({
  tiles: tilesReducer
})