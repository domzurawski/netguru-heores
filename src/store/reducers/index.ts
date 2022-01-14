import { modalReducer } from './modalReducer';
import { heroesReducer } from './heroesReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    heroesReducer,
    modalReducer,
});

export default reducers;
