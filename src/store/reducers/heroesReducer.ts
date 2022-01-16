import { HeroesAction, HeroesActionTypes } from 'store/actions/heroesActions';
import { IHero } from 'types';

const initialState: IHero[] = [
    {
        id: '1',
        imgUrl: 'bg-red-500',
        name: 'Russian Bear',
        type: 'Animal',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
    {
        id: '2',
        imgUrl: 'bg-blue-500',
        name: 'Mr. Avocado',
        type: 'Doctor',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
    {
        id: '3',
        imgUrl: 'bg-yellow-500',
        name: 'Cool Sheep',
        type: 'Animal',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
    {
        id: '4',
        imgUrl: 'bg-gray-500',
        name: 'Einstein',
        type: 'Physics',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
    {
        id: '5',
        imgUrl: 'bg-red-500',
        name: 'Russian Bear',
        type: 'Animal',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
    {
        id: '6',
        imgUrl: 'bg-blue-500',
        name: 'Mr. Avocado',
        type: 'Doctor',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
    {
        id: '7',
        imgUrl: 'bg-yellow-500',
        name: 'Cool Sheep',
        type: 'Animal',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
    {
        id: '8',
        imgUrl: 'bg-gray-500',
        name: 'Einstein',
        type: 'Physics',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
    {
        id: '9',
        imgUrl: 'bg-red-500',
        name: 'Russian Bear',
        type: 'Animal',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
    {
        id: '10',
        imgUrl: 'bg-blue-500',
        name: 'Mr. Avocado',
        type: 'Doctor',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat orci, egestas sit amet luctus gravida, fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a nisl tempor aliquam.',
    },
];

export const heroesReducer = (state = initialState, action: HeroesAction) => {
    switch (action.type) {
        case HeroesActionTypes.SetHeroes:
            return [...state, ...(action.payload as Array<IHero>)];
        default:
            return state;
    }
};
