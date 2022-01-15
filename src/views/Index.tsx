import HeroesList from 'components/HeroesList';
import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import ControlsSection from 'components/ControlsSection';
import { ModalContent, showModal } from 'store/actions/modalActions';
import { IHero } from 'types';

export default function Index(): ReactElement {
    const dispatch = useDispatch();
    const { heroId } = useParams();

    const [loadingHeroes, setLoadingHeroes] = useState<boolean>(true);

    useEffect(() => {
        if (heroId) {
            dispatch(showModal(ModalContent.HERO_DETAILS));
        }

        setLoadingHeroes(false);
    }, [dispatch, heroId]);

    return (
        <>
            <ControlsSection />
            <HeroesList />
        </>
    );
}
