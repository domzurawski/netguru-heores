import {
    ModalAction,
    ModalActionTypes,
    ModalContent,
} from 'store/actions/modalActions';
import { IHero } from 'types';

interface IModalState {
    isOpen: boolean;
    component: ModalContent | null;
    hero?: IHero | undefined;
}

const initialState: IModalState = {
    isOpen: false,
    component: null,
    hero: undefined,
};

export const modalReducer = (state = initialState, action: ModalAction) => {
    switch (action.type) {
        case ModalActionTypes.ShowModal:
            return { isOpen: true, ...action.payload };
        case ModalActionTypes.HideModal:
            return { ...state, isOpen: false, hero: undefined };
        default:
            return state;
    }
};
