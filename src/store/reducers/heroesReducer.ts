import { HeroesAction, HeroesActionTypes, IHero } from 'types';

const initialState: IHero[] = [];

export const heroesReducer = (state = initialState, action: HeroesAction) => {
    switch (action.type) {
        case HeroesActionTypes.SET_HEROES:
            return [...state, ...action.payload];
        default:
            return state;
    }
};
