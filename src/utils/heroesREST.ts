import { FormEvent } from 'react';
import { IHero } from 'types';
import { store } from 'store/store';
import { randomIntFromInterval } from './numbers';
import { ModalContent, showModal } from 'store/actions/modalActions';

const state = store.getState();

export const handleAddNewHero = async (
    e: FormEvent<HTMLFormElement>,
    newHero: IHero
) => {
    e.preventDefault();

    console.log(newHero);
};

export const handleDeleteHero = async (heroId: string) => {
    console.log('Random hero test', heroId);
};

export const handleGetHeroById = async (heroId: string) => {
    console.log('Random hero test', heroId);
};

export const handleGetAllHeroes = async () => {};

export const handleGetRandomHero = async () => {
    const allLoadedHeroes: IHero[] = state.heroesReducer;

    if (allLoadedHeroes.length === 0) {
        // return dispatch error snackbar
    }

    const randomizerHeroNumber = randomIntFromInterval(
        0,
        allLoadedHeroes.length
    );
    const randomizedHero = allLoadedHeroes[randomizerHeroNumber];

    store.dispatch(showModal(ModalContent.HERO_DETAILS, randomizedHero));
};
