import { FormEvent } from 'react';
import { IHero } from 'types';

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
    console.log('Random hero test');
};
