import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from 'store/actions/modalActions';
import { ModalContent } from 'types';
import { getRandomHero } from 'utils/heroesREST';
import { AddHeroButton, RandomizeButton } from './Buttons';

export default function ControlsSection(): ReactElement {
    const dispatch = useDispatch();

    const handleOpenNewHero = () => {
        dispatch(showModal(ModalContent.ADD_HERO));
    };

    const handleRandomize = async () => {
        getRandomHero().then((hero) =>
            dispatch(showModal(ModalContent.HERO_DETAILS, hero))
        );
    };

    return (
        <div className="sm:flex sm:space-y-0 grid-cols-12 gap-x-3 items-center mb-4 space-y-2">
            <AddHeroButton onClick={handleOpenNewHero} />
            <RandomizeButton onClick={handleRandomize} />
        </div>
    );
}
