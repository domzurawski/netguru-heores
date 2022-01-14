import { ReactElement } from 'react';
import { IHero } from 'types';
import HeroesListElement from './HeroesListElement';
import LoadingDots from './LoadingDots';

interface IProps {
    heroes: IHero[];
    loadingHeroes: boolean;
}

export default function HeroesList({
    heroes,
    loadingHeroes,
}: IProps): ReactElement {
    return (
        <div>
            <div className="hidden md:grid grid-cols-3 gap-x-3">
                <div className="py-2 text-gray-500">Hero</div>
                <div className="py-2 text-gray-500">Type</div>
                <div className="-ml-4 py-2 text-gray-500">Description</div>
            </div>

            <div className="mb-6">
                {heroes.map((hero: IHero, index) => (
                    <HeroesListElement key={index} hero={hero} />
                ))}
            </div>

            <LoadingDots loadingHeroes={loadingHeroes} />
        </div>
    );
}
