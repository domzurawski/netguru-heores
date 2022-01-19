import { IHeroesAction, HeroesActionTypes, IHero } from 'types';

export const setHeroes = (heroes: IHero[]): IHeroesAction => ({
    type: HeroesActionTypes.SET_HEROES,
    payload: heroes,
});

export const addHeroes = (heroes: IHero[]): IHeroesAction => ({
    type: HeroesActionTypes.ADD_HEROES,
    payload: heroes,
});

export const deleteHero = () => ({});

export const addHero = () => ({});
