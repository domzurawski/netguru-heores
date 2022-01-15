import { XIcon } from '@heroicons/react/solid';
import { ReactElement, useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { hideModal } from 'store/actions/modalActions';
import { IHero } from 'types';
import { DeleteHeroButton } from './Buttons';

interface IProps {
    hero: IHero | undefined;
}

export default function HeroDetails({ hero }: IProps): ReactElement {
    const dispatch = useDispatch();
    const { heroId } = useParams();
    const heroes = useSelector((state: RootStateOrAny) => state.heroesReducer);

    const [loading, setLoading] = useState<boolean>(true);
    const [selectedHero, setSelectetHero] = useState<IHero | undefined>(hero);

    useEffect(() => {
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
                //TODO: call api for yet unfetched hero

                setTimeout(() => setLoading(false), 3000);
            }
        }
    }, []);

    const handleClose = () => dispatch(hideModal());

    return (
        <>
            <XIcon
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-400 cursor-pointer h-6 w-6 float-right transition"
            />

            {loading ? (
                <>
                    <div className="w-28 h-28 rounded-full bg-gray-300 animate-pulse mt-8 my-6 mx-auto"></div>
                    <p className="w-28 h-5 rounded bg-gray-300 animate-pulse mx-auto mb-2"></p>
                    <p className="w-20 h-5 rounded bg-gray-300 animate-pulse mx-auto mb-4"></p>
                    <p className="w-full h-32 rounded bg-gray-300 animate-pulse mb-4"></p>
                </>
            ) : selectedHero ? (
                <>
                    <div
                        className={`w-28 h-28 rounded-full ${selectedHero.imgUrl} mt-8 my-6 mx-auto`}
                    ></div>

                    <p className="font-bold text-center">{selectedHero.name}</p>

                    <p className="text-gray-800 text-center mb-4">
                        {selectedHero.type}
                    </p>

                    <p className="text-gray-800 text-left mb-4">
                        {selectedHero.description}
                    </p>
                </>
            ) : (
                <div>no hero for u sugar</div>
            )}

            {selectedHero && (
                <div className="text-center">
                    <DeleteHeroButton onClick={() => console.log('abcd')} />
                </div>
            )}
        </>
    );
}
