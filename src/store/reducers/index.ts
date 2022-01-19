import { combineReducers } from 'redux';

import { heroesReducer } from './heroesReducer';
import { modalReducer } from './modalReducer';
import { typesReducer } from './typesReducer';

const reducers = combineReducers({
    heroesReducer,
    modalReducer,
    typesReducer,
});

export default reducers;
