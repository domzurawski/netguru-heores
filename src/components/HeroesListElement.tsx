import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContent, showModal } from 'store/actions/modalActions';
import { IHero } from 'types';

interface IProps {
    hero: IHero;
}

export default function HeroesListElement({ hero }: IProps): ReactElement {
    const dispatch = useDispatch();

    const handleOpenHeroDetails = () => {
        dispatch(showModal(ModalContent.HERO_DETAILS, hero.id));
    };

    return (
        <div
            onClick={handleOpenHeroDetails}
            className="bg-white rounded-md mb-2 p-4 cursor-pointer"
        >
            <div className="md:grid md:grid-cols-3 md:items-center">
                <div className="flex items-center mb-4 md:m-0">
                    <div
                        className={`w-10 h-10 rounded-full ${hero.imgUrl} mr-4`}
                    ></div>
                    <div className="flex flex-col">
                        <p className="font-bold">{hero.name}</p>
                        <div className="text-gray-800 md:hidden">
                            {hero.type}
                        </div>
                    </div>
                </div>
                <div className="hidden md:block text-gray-800">{hero.type}</div>
                <div className="text-gray-800 truncate">{hero.description}</div>
            </div>
        </div>
    );
}
