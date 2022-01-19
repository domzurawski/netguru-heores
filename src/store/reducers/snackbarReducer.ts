import {
    ISnackbarAction,
    ISnackbarState,
    SnackbarActionTypes,
    SnackbarSeverity,
} from 'types';

const initialState: ISnackbarState = {
    severity: SnackbarSeverity.ERROR,
    isOpen: false,
    message: 'Default Reducer Test message',
};

export const snackbarReducer = (
    state: ISnackbarState = initialState,
    action: ISnackbarAction
) => {
    switch (action.type) {
        case SnackbarActionTypes.SHOW_SNACKBAR:
            return {
                isOpen: true,
                severity: action.payload?.severity,
                message: action.payload?.message,
            };
        case SnackbarActionTypes.HIDE_SNACKBAR:
            return { ...state, isOpen: false };
        default:
            return state;
    }
};

// import { createSlice } from '@reduxjs/toolkit';
// import { ISnackbarState, SnackbarSeverity } from 'types';

// const initialState: ISnackbarState = {
//     severity: SnackbarSeverity.DEFAULT,
//     isOpen: false,
// };

// const snackbarSlice = createSlice({
//     name: 'snackbar',
//     initialState,
//     reducers: {
//         SHOW_SNACKBAR(state, action) {
//             state.push({ severity: action.payload, isOpen: true });
//         },
//         HIDE_SNACKBAR(state, action) {
//             state.push({ ...state, isOpen: false });
//         },
//     },
// });

// export const { SHOW_SNACKBAR, HIDE_SNACKBAR } = snackbarSlice.actions;

// export default snackbarSlice.reducer;
