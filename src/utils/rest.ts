import axios from 'axios';
import { IHero, IHeroesBatch } from 'types';
import { store } from 'store/store';
import { addHeroes } from 'store/actions/heroesActions';
import { HEROES_ENDPOINT } from 'constants/endpoints';
import { fixAvatarUrl } from './heroAvatarFix';

export const addNewHero = async (): Promise<IHero | undefined> => {
    const test: IHero | undefined = undefined;

    return test;
};

export const deleteHero = async (
    heroId: string
): Promise<IHero | undefined> => {
    const deletedHero: IHero | undefined = await axios
        .delete(HEROES_ENDPOINT + `/${heroId}`)
        .then(({ data }) => data)
        .catch((e) => {
            console.log(e);
            return undefined;
        });

    return deletedHero;
};

export const getHeroById = async (
    heroId: string
): Promise<IHero | undefined> => {
    const state = store.getState();
    const allLoadedHeroes: IHero[] = state.heroesReducer.heroes;

    const hero: IHero = allLoadedHeroes.filter(
        (hero: IHero) => hero.id === heroId
    )[0];

    if (hero) return hero;

    const fetchedHero: IHero | undefined = await axios(
        HEROES_ENDPOINT + '/' + heroId
    )
        .then(({ data }) => fixAvatarUrl(data))
        .catch((e) => {
            console.log(e);
            return undefined;
        });

    return fetchedHero;
};

export const getRandomHero = async (): Promise<IHero | undefined> => {
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
    const allLoadedHeroes: IHero[] = state.heroesReducer.heroes;
    const numberOfHeroes: number = allLoadedHeroes.length;

    const HEROES_PER_BATCH = 10;

    const heroesBatch: IHeroesBatch | undefined = await axios(
        HEROES_ENDPOINT +
            `?skip=${numberOfHeroes}` +
            `&first=${HEROES_PER_BATCH}`
    )
        .then(({ data }) => {
            const { totalCount } = data;
            return {
                heroes: data.data.map((hero: IHero) => fixAvatarUrl(hero)),
                totalCount,
            };
        })
        .catch((e) => {
            console.log(e);
            return undefined;
        });

    if (heroesBatch) {
        const { totalCount, heroes } = heroesBatch;
        store.dispatch(addHeroes({ totalCount, heroes }));
    } else {
        // dispatch error
    }
};
