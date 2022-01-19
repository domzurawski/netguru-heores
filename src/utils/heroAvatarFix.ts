import { IHero } from 'types';

// this utility function is created to bypass Heroes API bug (more info in README.me)
export const fixAvatarUrl = (hero: IHero): IHero | undefined => {
    if (hero) {
        return {
            ...hero,
            avatarUrl:
                process.env.REACT_APP_API_URL +
                hero.avatarUrl.replace('assets', 'static'),
        };
    }
    return undefined;
};
