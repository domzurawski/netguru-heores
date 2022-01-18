import { HeroesAction, HeroesActionTypes, IHero } from 'types';

export const setHeroes = (heroes: IHero[]): HeroesAction => ({
    type: HeroesActionTypes.SET_HEROES,
    payload: heroes,
});

export const addHeroes = (heroes: IHero[]): HeroesAction => ({
    type: HeroesActionTypes.ADD_HEROES,
    payload: heroes,
});

export const deleteHero = () => ({});

export const addHero = () => ({});
