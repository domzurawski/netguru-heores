import { FormEvent } from 'react';
import { IHero } from 'types';

export const handleAddNewHero = async (
    e: FormEvent<HTMLFormElement>,
    newHero: IHero
) => {
    e.preventDefault();

    console.log(newHero);
};

export const handleDeleteNewHero = async (heroId: string) => {};

export const handleGetHeroById = async (heroId: string) => {};

export const handleGetAllHeroes = async () => {};

export const handleGetRandomHero = async () => {};
