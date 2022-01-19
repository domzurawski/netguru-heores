import { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setHeroes } from 'store/actions/heroesActions';
import { hideModal } from 'store/actions/modalActions';
import { showSnackbar } from 'store/actions/snackbarActions';
import { IHero, RootState, SnackbarSeverity } from 'types';
import { deleteHero, getHeroById } from 'utils/rest';
import { DeleteHeroButton } from './Buttons';

interface IProps {
    hero: IHero | undefined;
}

export default function HeroDetails({ hero }: IProps): ReactElement {
    const { heroId } = useParams();
    const dispatch = useDispatch();

    const { heroes, totalCount } = useSelector(
        (state: RootState) => state.heroesReducer
    );

    const [loading, setLoading] = useState<boolean>(true);
    const [selectedHero, setSelectetHero] = useState<IHero | undefined>(
        undefined
    );

    useEffect(() => {
        if (hero) {
            setSelectetHero(hero);
            setLoading(false);
        } else if (heroId) {
            getHeroById(heroId).then(
                (hero: IHero | undefined) => hero && setSelectetHero(hero)
            );
        }

        setLoading(false);
        return () => setLoading(false);
    }, [hero, heroId, heroes]);

    const handleDeleteHero = async (heroId: string) => {
        deleteHero(heroId).then((deletedHero: IHero | undefined) => {
            if (deletedHero) {
                const updatedHeros: IHero[] = heroes.filter(
                    (hero: IHero) => hero.id !== deletedHero.id
                );
                dispatch(
                    setHeroes({
                        totalCount: totalCount - 1,
                        heroes: updatedHeros,
                    })
                );
                dispatch(hideModal());
                dispatch(
                    showSnackbar(
                        SnackbarSeverity.SUCCESS,
                        deletedHero.fullName + ' deleted'
                    )
                );
            } else {
                dispatch(
                    showSnackbar(SnackbarSeverity.ERROR, 'Something went wrong')
                );
            }
        });
    };

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
                            src={selectedHero.avatarUrl}
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
