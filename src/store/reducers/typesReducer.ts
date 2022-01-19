import { ITypesAction, ITypesState, TypesActionTypes } from 'types';

const initialState: ITypesState = {
    types: [],
};

export const typesReducer = (state = initialState, action: ITypesAction) => {
    switch (action.type) {
        case TypesActionTypes.SET_TYPES:
            return { types: action.payload.types };
        default:
            return state;
    }
};
