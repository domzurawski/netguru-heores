import { IHero } from 'types';

export type Action = { type: string; payload?: IHero | IHero[] | string };

export const setHeroes = () => ({});
export const deleteHero = () => ({});
export const addHero = () => ({});
