import { IHero } from 'types';

export enum ModalActionTypes {
    ShowModal,
    HideModal,
}

export interface ModalAction {
    type: ModalActionTypes;
    payload?: {
        component: ModalContent;
        hero: IHero | undefined;
    };
}

export enum ModalContent {
    ADD_HERO,
    HERO_DETAILS,
}

export function showModal(
    component: ModalContent,
    hero: IHero | undefined = undefined
): ModalAction {
    return {
        type: ModalActionTypes.ShowModal,
        payload: {
            component,
            hero,
        },
    };
}

export function hideModal(): ModalAction {
    return {
        type: ModalActionTypes.HideModal,
    };
}
