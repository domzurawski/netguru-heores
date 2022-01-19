import { IType, ITypesAction, TypesActionTypes } from 'types';

export const setTypes = (types: IType[]): ITypesAction => ({
    type: TypesActionTypes.SET_TYPES,
    payload: types,
});
