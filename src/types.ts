export interface IHero {
    id: string;
    avatarUrl: string;
    fullName: string;
    typeId: string;
    type: IType;
    description: string;
}

export interface IType {
    id: string;
    name: string;
}

export enum HeroesActionTypes {
    SET_HEROES = 'SET_HEROES',
    DELETE_HERO = 'DELETE_HERO',
    ADD_HERO = 'ADD_HERO',
    ADD_HEROES = 'ADD_HEROES',
}

export type HeroesAction = {
    type: HeroesActionTypes;
    payload: IHero[];
};

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
