import { IHeroesAction, HeroesActionTypes, IHeroesState } from 'types';

const initialState: IHeroesState = {
    heroes: [],
    totalCount: 9999,
};

export const heroesReducer = (
    state: IHeroesState = initialState,
    action: IHeroesAction
) => {
    switch (action.type) {
        case HeroesActionTypes.SET_HEROES:
            return {
                totalCount: action.payload.totalCount,
                heroes: action.payload.heroes,
            };
        case HeroesActionTypes.ADD_HEROES:
            return {
                totalCount: action.payload.totalCount,
                heroes: [...state.heroes, ...action.payload.heroes],
            };
        default:
            return state;
    }
};
