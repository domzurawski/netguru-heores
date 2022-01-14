import HeroesList from 'components/HeroesList';
import { ReactElement, useEffect, useState } from 'react';
import AddHero from 'components/AddHero';
import { useParams } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import ControlsSection from 'components/ControlsSection';
import { openModal } from 'store/actions/modalActions';
import HeroDetails from 'components/HeroDetails';

export default function Index(): ReactElement {
    const { heroId } = useParams();
    const dispatch = useDispatch();

    const heroes = useSelector((state: RootStateOrAny) => state.heroesReducer);
    const [loadingHeroes, setLoadingHeroes] = useState<boolean>(true);

    const handleOpenNewHero = () => {
        dispatch(openModal());
    };

    useEffect(() => {
        if (heroId) {
            console.log(heroId);
        }

        setLoadingHeroes(false);
    }, [heroId]);

    return (
        <>
            <ControlsSection handleOpenNewHero={handleOpenNewHero} />
            <HeroesList heroes={heroes} loadingHeroes={loadingHeroes} />
            <AddHero />

            <HeroDetails />
        </>
    );
}
