import { ReactElement } from 'react';
import { IHero, IHeroesState, RootState } from 'types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux';
import { getHeroesBatch } from 'utils/rest';
import HeroesListElement from './HeroesListElement';
import LoadingDots from './LoadingDots';
import NoMoreHeroes from './NoMoreHeroes';

export default function HeroesList(): ReactElement {
    const { heroes, totalCount }: IHeroesState = useSelector(
        (state: RootState) => state.heroesReducer
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
                hasMore={heroes.length < totalCount ? true : false}
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
