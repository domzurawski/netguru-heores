import { FormEvent } from 'react';
import { IHero } from 'types';
import { store } from 'store/store';
import { randomIntFromInterval } from './numbers';
import { ModalContent, showModal } from 'store/actions/modalActions';
import { setHeroes } from 'store/actions/heroesActions';

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

export const handleGetHeroesBatch = async () => {
    const allLoadedHeroes: IHero[] = state.heroesReducer;
    const numberOfHeroes: number = allLoadedHeroes.length;

    let batch: IHero[] = [
        {
            id: (numberOfHeroes + 1).toString(),
            imgUrl: 'bg-red-500',
            name: 'Russian Bear',
            type: 'Animal',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
        },
        {
            id: (numberOfHeroes + 2).toString(),
            imgUrl: 'bg-blue-500',
            name: 'Mr. Avocado',
            type: 'Doctor',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
        },
        {
            id: (numberOfHeroes + 3).toString(),
            imgUrl: 'bg-yellow-500',
            name: 'Cool Sheep',
            type: 'Animal',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
        },
        {
            id: (numberOfHeroes + 4).toString(),
            imgUrl: 'bg-gray-500',
            name: 'Einstein',
            type: 'Physics',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
        },
        {
            id: (numberOfHeroes + 5).toString(),
            imgUrl: 'bg-red-500',
            name: 'Russian Bear',
            type: 'Animal',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
        },
        {
            id: (numberOfHeroes + 6).toString(),
            imgUrl: 'bg-blue-500',
            name: 'Mr. Avocado',
            type: 'Doctor',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
        },
        {
            id: (numberOfHeroes + 7).toString(),
            imgUrl: 'bg-yellow-500',
            name: 'Cool Sheep',
            type: 'Animal',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
        },
        {
            id: (numberOfHeroes + 8).toString(),
            imgUrl: 'bg-gray-500',
            name: 'Einstein',
            type: 'Physics',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
        },
        {
            id: (numberOfHeroes + 9).toString(),
            imgUrl: 'bg-red-500',
            name: 'Russian Bear',
            type: 'Animal',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
        },
        {
            id: (numberOfHeroes + 10).toString(),
            imgUrl: 'bg-blue-500',
            name: 'Mr. Avocado',
            type: 'Doctor',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
        },
    ];

    setTimeout(() => store.dispatch(setHeroes(batch)), 1500);
};
