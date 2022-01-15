export enum ModalActionTypes {
    ShowModal,
    HideModal,
}

export interface ModalAction {
    type: ModalActionTypes;
    payload?: {
        component: ModalContent;
        heroId: string | undefined;
    };
}

export enum ModalContent {
    ADD_HERO,
    HERO_DETAILS,
}

export function showModal(
    component: ModalContent,
    heroId: string | undefined = undefined
): ModalAction {
    return {
        type: ModalActionTypes.ShowModal,
        payload: {
            component,
            heroId,
        },
    };
}

export function hideModal(): ModalAction {
    return {
        type: ModalActionTypes.HideModal,
    };
}
