import { Action } from 'store/actions/modalActions';
import { IHero } from 'types';

const initialState: IHero[] = [
    {
        imgUrl: 'bg-red-500',
        name: 'Russian Bear',
        type: 'Animal',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
    {
        imgUrl: 'bg-blue-500',
        name: 'Mr. Avocado',
        type: 'Doctor',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
    {
        imgUrl: 'bg-yellow-500',
        name: 'Cool Sheep',
        type: 'Animal',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
    {
        imgUrl: 'bg-gray-500',
        name: 'Einstein',
        type: 'Physics',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
    {
        imgUrl: 'bg-red-500',
        name: 'Russian Bear',
        type: 'Animal',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
    {
        imgUrl: 'bg-blue-500',
        name: 'Mr. Avocado',
        type: 'Doctor',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
    {
        imgUrl: 'bg-yellow-500',
        name: 'Cool Sheep',
        type: 'Animal',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
    {
        imgUrl: 'bg-gray-500',
        name: 'Einstein',
        type: 'Physics',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
];

export type NewHeroState = boolean;

export const heroesReducer = (
    state: IHero[] = initialState,
    action: Action
) => {
    switch (action.type) {
        default:
            return state;
    }
};
