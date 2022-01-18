import { ReactElement } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { RootStateOrAny, useSelector } from 'react-redux';
import { IHero } from 'types';
import { getHeroesBatch } from 'utils/heroesREST';
import HeroesListElement from './HeroesListElement';
import LoadingDots from './LoadingDots';
import NoMoreHeroes from './NoMoreHeroes';

export default function HeroesList(): ReactElement {
    const heroes: IHero[] = useSelector(
        (state: RootStateOrAny) => state.heroesReducer
    );

    return (
        <div>
            <div className="hidden md:grid grid-cols-3 gap-x-3">
                <div className="py-2 text-gray-500">Hero</div>
                <div className="py-2 text-gray-500">Type</div>
                <div className="-ml-4 py-2 text-gray-500">Description</div>
            </div>

            <InfiniteScroll
                dataLength={heroes.length}
                next={getHeroesBatch}
                hasMore={heroes.length < 23 ? true : false}
                loader={<LoadingDots />}
                endMessage={<NoMoreHeroes />}
            >
                {heroes.map((hero: IHero) => (
                    <HeroesListElement key={hero.id} hero={hero} />
                ))}
            </InfiniteScroll>
        </div>
    );
}
