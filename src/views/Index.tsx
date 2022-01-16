import HeroesList from 'components/HeroesList';
import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ControlsSection from 'components/ControlsSection';
import { ModalContent, showModal } from 'store/actions/modalActions';

export default function Index(): ReactElement {
    const dispatch = useDispatch();
    const { heroId } = useParams();

    useEffect(() => {
        if (heroId) {
            dispatch(showModal(ModalContent.HERO_DETAILS));
        }
    }, [dispatch, heroId]);

    return (
        <>
            <ControlsSection />
            <HeroesList />
        </>
    );
}
