import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from 'store/actions/modalActions';
import { IHero, ModalContent } from 'types';

interface IProps {
    hero: IHero;
}

export default function HeroesListElement({ hero }: IProps): ReactElement {
    const dispatch = useDispatch();

    const handleOpenHeroDetails = () => {
        dispatch(showModal(ModalContent.HERO_DETAILS, hero));
    };

    return (
        <div
            onClick={handleOpenHeroDetails}
            className="bg-white rounded-md mb-2 p-4 cursor-pointer"
        >
            <div className="md:grid md:grid-cols-3 md:items-center">
                <div className="flex items-center mb-4 md:m-0">
                    <img
                        className="w-10 h-10 rounded-full mr-4"
                        src={process.env.REACT_APP_API_URL + hero.avatarUrl}
                        alt="avatar"
                    />
                    <div className="flex flex-col">
                        <p className="font-bold">{hero.fullName}</p>
                        <div className="text-gray-800 md:hidden">
                            {hero.type.name}
                        </div>
                    </div>
                </div>
                <div className="hidden md:block text-gray-800">
                    {hero.type.name}
                </div>
                <div className="text-gray-800 truncate">{hero.description}</div>
            </div>
        </div>
    );
}
