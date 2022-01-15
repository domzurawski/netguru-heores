import HeroesList from 'components/HeroesList';
import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';
import ControlsSection from 'components/ControlsSection';

export default function Index(): ReactElement {
    const { heroId } = useParams();

    const heroes = useSelector((state: RootStateOrAny) => state.heroesReducer);
    const [loadingHeroes, setLoadingHeroes] = useState<boolean>(true);

    useEffect(() => {
        if (heroId) console.log(heroId);

        setLoadingHeroes(false);
    }, [heroId]);

    return (
        <>
            <ControlsSection />
            <HeroesList heroes={heroes} loadingHeroes={loadingHeroes} />
        </>
    );
}
