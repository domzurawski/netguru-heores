export enum ModalActionTypes {
    ShowModal,
    HideModal,
}

export interface ModalAction {
    type: ModalActionTypes;
    payload?: ModalContent;
}

export enum ModalContent {
    ADD_HERO,
    HERO_DETAILS,
}

export function showModal(component: ModalContent): ModalAction {
    return {
        type: ModalActionTypes.ShowModal,
        payload: component,
    };
}

export function hideModal(): ModalAction {
    return {
        type: ModalActionTypes.HideModal,
    };
}
