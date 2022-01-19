import { IType, ITypesAction, TypesActionTypes } from 'types';

const initialState: IType[] = [];

export const typesReducer = (
    state: IType[] = initialState,
    action: ITypesAction
) => {
    switch (action.type) {
        case TypesActionTypes.SET_TYPES:
            return action.payload;
        default:
            return state;
    }
};
