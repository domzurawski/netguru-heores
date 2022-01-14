import { Action } from 'store/actions/modalActions';

const initialState = false;

export type modalState = boolean;

export const modalReducer = (
    state: modalState = initialState,
    action: Action
) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return true;
        case 'CLOSE_MODAL':
            return false;
        default:
            return state;
    }
};
