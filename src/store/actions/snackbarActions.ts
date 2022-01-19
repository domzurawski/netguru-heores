import { ISnackbarAction, SnackbarActionTypes, SnackbarSeverity } from 'types';

export const showSnackbar = (
    severity: SnackbarSeverity,
    message: string
): ISnackbarAction => ({
    type: SnackbarActionTypes.SHOW_SNACKBAR,
    payload: { severity, message },
});

export const hideSnackbar = (): ISnackbarAction => ({
    type: SnackbarActionTypes.HIDE_SNACKBAR,
});
