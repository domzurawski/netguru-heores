export interface RootState {
    modalReducer: IModalState;
    heroesReducer: IHeroesState;
    typesReducer: IType[];
}

// HEROES

export interface IHero {
    id: string;
    avatarUrl: string;
    fullName: string;
    typeId: string;
    type: IType;
    description: string;
}

export interface IHeroesBatch {
    totalCount: number;
    heroes: IHero[];
}

export interface INewHero {
    fullName: string;
    typeId: string;
    avatarUrl: string;
    description: string;
}

export enum HeroesActionTypes {
    SET_HEROES = 'SET_HEROES',
    ADD_HEROES = 'ADD_HEROES',
}

export interface IHeroesAction {
    type: HeroesActionTypes;
    payload: IHeroesState;
}

export interface IHeroesState {
    totalCount: number;
    heroes: IHero[];
}

// MODAL

export enum ModalActionTypes {
    SHOW_MODAL = 'SHOW_MODAL',
    HIDE_MODAL = 'HIDE_MODAL',
}

export interface ModalAction {
    type: ModalActionTypes;
    payload?: {
        component: ModalContent;
        hero: IHero | undefined;
    };
}

export enum ModalContent {
    ADD_HERO = 'ADD_HERO',
    HERO_DETAILS = 'HERO_DETAILS',
}

export interface IModalState {
    isOpen: boolean;
    component: ModalContent | null;
    hero?: IHero | undefined;
}

// TYPES

export enum TypesActionTypes {
    SET_TYPES = 'SET_TYPES',
}

export interface ITypesState {
    types: IType[];
}

export interface IType {
    id: string;
    name: string;
}

export interface ITypesAction {
    type: TypesActionTypes;
    payload: ITypesState;
}
