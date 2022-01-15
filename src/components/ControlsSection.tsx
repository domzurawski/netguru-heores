import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContent, showModal } from 'store/actions/modalActions';
import { handleGetRandomHero } from 'utils/heroesREST';
import { AddHeroButton, RandomizeButton } from './Buttons';

export default function ControlsSection(): ReactElement {
    const dispatch = useDispatch();

    const handleOpenNewHero = () => {
        dispatch(showModal(ModalContent.ADD_HERO));
    };

    return (
        <div className="sm:flex sm:space-y-0 grid-cols-12 gap-x-3 items-center mb-4 space-y-2">
            <AddHeroButton onClick={handleOpenNewHero} />
            <RandomizeButton onClick={handleGetRandomHero} />
        </div>
    );
}
