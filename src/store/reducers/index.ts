import { combineReducers } from 'redux';

import { heroesReducer } from './heroesReducer';
import { modalReducer } from './modalReducer';

const reducers = combineReducers({
    heroesReducer,
    modalReducer,
});

export default reducers;
