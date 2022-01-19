import HeroesList from 'components/HeroesList';
import { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ControlsSection from 'components/ControlsSection';
import { showModal } from 'store/actions/modalActions';
import { getHeroesBatch } from 'utils/rest';
import { ModalContent } from 'types';

export default function Index(): ReactElement {
    const dispatch = useDispatch();
    const { heroId } = useParams();

    useEffect(() => {
        if (heroId) dispatch(showModal(ModalContent.HERO_DETAILS));

        getHeroesBatch();
    }, [dispatch, heroId]);

    return (
        <>
            <ControlsSection />
            <HeroesList />
        </>
    );
}
