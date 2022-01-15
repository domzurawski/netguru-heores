import { XIcon } from '@heroicons/react/solid';
import { ReactElement } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { hideModal } from 'store/actions/modalActions';
import { IHero } from 'types';
import { DeleteHeroButton } from './Buttons';

interface IProps {
    heroId: string;
}

export default function HeroDetails({
    heroId: propHeroId,
}: IProps): ReactElement {
    const dispatch = useDispatch();
    const { heroId: paramHeroId } = useParams();

    const heroes = useSelector((state: RootStateOrAny) => state.heroesReducer);
    let hero: IHero | undefined;

    if (propHeroId) {
        hero = heroes.filter((hero: IHero) => hero.id === propHeroId)[0];
    } else {
        hero = heroes.filter((hero: IHero) => hero.id === paramHeroId)[0];
    }

    const handleClose = () => dispatch(hideModal());

    return hero ? (
        <>
            <XIcon
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-400 cursor-pointer h-6 w-6 float-right transition"
            />

            <div
                className={`w-28 h-28 rounded-full ${hero.imgUrl} mt-8 my-6 mx-auto`}
            ></div>

            <p className="font-bold text-center">{hero.name}</p>

            <p className="text-gray-800 text-center mb-4">{hero.type}</p>

            <p className="text-gray-800 text-left mb-4">{hero.description}</p>

            <div className="text-center">
                <DeleteHeroButton onClick={() => console.log('abcd')} />
            </div>
        </>
    ) : (
        <div>Unfortunately we couldn't find any hero of specified ID </div>
    );
}
