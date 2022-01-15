import {
    ModalAction,
    ModalActionTypes,
    ModalContent,
} from 'store/actions/modalActions';

interface IModalState {
    isOpen: boolean;
    component: ModalContent | null;
}

const initialState: IModalState = {
    isOpen: false,
    component: null,
};

export const modalReducer = (state = initialState, action: ModalAction) => {
    switch (action.type) {
        case ModalActionTypes.ShowModal:
            return { isOpen: true, component: action.payload };
        case ModalActionTypes.HideModal:
            return { ...state, isOpen: false };
        default:
            return state;
    }
};
