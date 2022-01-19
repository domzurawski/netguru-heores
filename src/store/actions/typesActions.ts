import { ITypesAction, ITypesState, TypesActionTypes } from 'types';

export const setTypes = ({ types }: ITypesState): ITypesAction => ({
    type: TypesActionTypes.SET_TYPES,
    payload: { types },
});
