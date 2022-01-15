import {
    ModalAction,
    ModalActionTypes,
    ModalContent,
} from 'store/actions/modalActions';

interface IModalState {
    isOpen: boolean;
    component: ModalContent | null;
    heroId?: string;
}

const initialState: IModalState = {
    isOpen: false,
    component: null,
    heroId: undefined,
};

export const modalReducer = (state = initialState, action: ModalAction) => {
    switch (action.type) {
        case ModalActionTypes.ShowModal:
            return { isOpen: true, ...action.payload };
        case ModalActionTypes.HideModal:
            return { ...state, isOpen: false };
        default:
            return state;
    }
};
