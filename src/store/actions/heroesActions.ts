import { IHero } from 'types';

export enum HeroesActionTypes {
    SetHeroes = 'SET_HEROES',
    DeleteHero = 'DELETE_HERO',
    AddHero = 'ADD_HERO',
}

export type HeroesAction = {
    type: HeroesActionTypes;
    payload: IHero | IHero[] | string;
};

export const setHeroes = (heroes: IHero[]): HeroesAction => ({
    type: HeroesActionTypes.SetHeroes,
    payload: heroes,
});

export const deleteHero = () => ({});

export const addHero = () => ({});
