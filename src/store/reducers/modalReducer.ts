import { IModalState, ModalAction, ModalActionTypes } from 'types';

const initialState: IModalState = {
    isOpen: false,
    component: null,
    hero: undefined,
};

export const modalReducer = (state = initialState, action: ModalAction) => {
    switch (action.type) {
        case ModalActionTypes.SHOW_MODAL:
            return { isOpen: true, ...action.payload };
        case ModalActionTypes.HIDE_MODAL:
            return { ...state, isOpen: false };
        default:
            return state;
    }
};
