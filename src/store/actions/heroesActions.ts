import { IHero } from 'types';

export type HeoresAction = { type: string; payload?: IHero | IHero[] | string };

export const setHeroes = () => ({});
export const deleteHero = () => ({});
export const addHero = () => ({});
