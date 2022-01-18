import { FormEvent } from 'react';
import { IHero } from 'types';
import { store } from 'store/store';
import { setHeroes } from 'store/actions/heroesActions';
import axios from 'axios';
import { HEROES_ENDPOINT } from 'constants/endpoints';
import { fixAvatarUrl } from './heroAvatarFix';

export const handleAddNewHero = async (
    e: FormEvent<HTMLFormElement>,
    newHero: IHero
) => {
    e.preventDefault();

    console.log(newHero);
};

export const handleDeleteHero = async (heroId: string) => {
    console.log('Delete hero test', heroId);
};

export const handleGetHeroById = async (heroId: string) => {};

export const handleGetRandomHero = async (): Promise<IHero | undefined> => {
    const randomHero: IHero | undefined = await axios(
        HEROES_ENDPOINT + '/random'
    )
        .then(({ data }) => fixAvatarUrl(data))
        .catch((e) => {
            console.log(e);
            return undefined;
        });

    return randomHero;
};

export const getHeroesBatch = async () => {
    const state = store.getState();
    const allLoadedHeroes: IHero[] = state.heroesReducer;
    const numberOfHeroes: number = allLoadedHeroes.length;

    const HEROES_PER_BATCH = 10;

    const heroesBatch = await axios(
        HEROES_ENDPOINT +
            `?skip=${numberOfHeroes}` +
            `&first=${HEROES_PER_BATCH}`
    )
        .then(({ data }) => data.data.map((hero: IHero) => fixAvatarUrl(hero)))
        .catch((e) => console.log(e));

    if (heroesBatch < HEROES_PER_BATCH)
        console.log('CREATE NEW STORE AND PASS NO MORE HEROES = TRUE');

    store.dispatch(setHeroes(heroesBatch));
};
