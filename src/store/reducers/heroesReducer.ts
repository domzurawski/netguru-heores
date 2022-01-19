import { IHeroesAction, HeroesActionTypes, IHero } from 'types';

const initialState: IHero[] = [];

export const heroesReducer = (state = initialState, action: IHeroesAction) => {
    switch (action.type) {
        case HeroesActionTypes.SET_HEROES:
            return [...action.payload];
        case HeroesActionTypes.ADD_HEROES:
            return [...state, ...action.payload];
        default:
            return state;
    }
};
