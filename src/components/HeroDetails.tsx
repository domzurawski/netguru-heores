import axios from 'axios';
import { HEROES_ENDPOINT } from 'constants/endpoints';
import { ReactElement, useEffect, useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IHero } from 'types';
import { handleDeleteHero, handleGetHeroById } from 'utils/heroesREST';
import { DeleteHeroButton } from './Buttons';

interface IProps {
    hero: IHero | undefined;
}

export default function HeroDetails({ hero }: IProps): ReactElement {
    const { heroId } = useParams();
    const heroes = useSelector((state: RootStateOrAny) => state.heroesReducer);

    const [loading, setLoading] = useState<boolean>(true);
    const [selectedHero, setSelectetHero] = useState<IHero | undefined>(
        undefined
    );

    useEffect(() => {
        const getSelectedHero = async () => {
            if (hero) {
                setSelectetHero(hero);
                setLoading(false);
            } else if (!hero && heroId) {
                const tempHero = heroes.filter(
                    (hero: IHero) => hero.id === heroId
                )[0];

                if (tempHero) {
                    setSelectetHero(tempHero);
                    setLoading(false);
                } else {
                    handleGetHeroById(heroId)
                        .then((hero) => hero && setSelectetHero(hero))
                        .finally(() => setLoading(false));
                }
            }
        };

        getSelectedHero();

        return () => setLoading(false);
    }, [hero, heroId, heroes]);

    return (
        <>
            <div className="h-full flex flex-col">
                {loading ? (
                    <>
                        <div className="w-28 h-28 rounded-full bg-gray-300 animate-pulse mt-8 my-6 mx-auto"></div>
                        <p className="w-28 h-5 rounded bg-gray-300 animate-pulse mx-auto mb-2"></p>
                        <p className="w-20 h-5 rounded bg-gray-300 animate-pulse mx-auto mb-4"></p>
                        <p className="w-full h-32 rounded bg-gray-300 animate-pulse mb-4"></p>
                    </>
                ) : selectedHero ? (
                    <>
                        <img
                            className="w-28 h-28 mx-auto mt-8 my-6 rounded-full"
                            src={
                                process.env.REACT_APP_API_URL +
                                selectedHero.avatarUrl
                            }
                            alt="avatar"
                        />

                        <p className="font-bold text-center">
                            {selectedHero.fullName}
                        </p>

                        <p className="text-gray-800 text-center mb-4">
                            {selectedHero.type.name}
                        </p>

                        <p className="text-gray-800 text-left mb-4">
                            {selectedHero.description}
                        </p>
                    </>
                ) : (
                    <p className="text-gray-600 font-bold my-6 text-center text-xl">
                        Oops! Something went wrong 😞
                    </p>
                )}

                {selectedHero && (
                    <div className="text-center mt-auto">
                        <DeleteHeroButton
                            onClick={() => handleDeleteHero(selectedHero.id)}
                        />
                    </div>
                )}
            </div>
        </>
    );
}
