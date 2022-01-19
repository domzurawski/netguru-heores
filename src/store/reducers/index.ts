import { combineReducers } from 'redux';

import { heroesReducer } from './heroesReducer';
import { modalReducer } from './modalReducer';
import { snackbarReducer } from './snackbarReducer';
import { typesReducer } from './typesReducer';

const reducers = combineReducers({
    heroesReducer,
    modalReducer,
    typesReducer,
    snackbarReducer,
});

export default reducers;
