import { IHero, ModalAction, ModalActionTypes, ModalContent } from 'types';

export const showModal = (
    component: ModalContent,
    hero: IHero | undefined = undefined
): ModalAction => ({
    type: ModalActionTypes.SHOW_MODAL,
    payload: {
        component,
        hero,
    },
});

export const hideModal = (): ModalAction => ({
    type: ModalActionTypes.HIDE_MODAL,
});
