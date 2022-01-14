export type Action = { type: string };

export const openModal = () => ({ type: 'OPEN_MODAL' });

export const closeModal = () => ({ type: 'CLOSE_MODAL' });
