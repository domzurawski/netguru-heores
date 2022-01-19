import { IHeroesAction, HeroesActionTypes, IHeroesState } from 'types';

export const setHeroes = ({
    totalCount,
    heroes,
}: IHeroesState): IHeroesAction => ({
    type: HeroesActionTypes.SET_HEROES,
    payload: { totalCount, heroes },
});

export const addHeroes = ({
    totalCount,
    heroes,
}: IHeroesState): IHeroesAction => ({
    type: HeroesActionTypes.ADD_HEROES,
    payload: { totalCount, heroes },
});
