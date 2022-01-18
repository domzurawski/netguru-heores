import { IHero, ModalAction, ModalActionTypes, ModalContent } from 'types';

export function showModal(
    component: ModalContent,
    hero: IHero | undefined = undefined
): ModalAction {
    return {
        type: ModalActionTypes.SHOW_MODAL,
        payload: {
            component,
            hero,
        },
    };
}

export function hideModal(): ModalAction {
    return {
        type: ModalActionTypes.HIDE_MODAL,
    };
}
