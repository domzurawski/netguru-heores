import { IHero } from 'types';

// this utility function is created to bypass Heroes API bug (more info in README.me)
export const fixAvatarUrl = (hero: IHero): IHero | undefined => {
    if (hero) {
        return {
            ...hero,
            avatarUrl: hero.avatarUrl.replace('assets', 'static'),
        };
    }
    return undefined;
};
