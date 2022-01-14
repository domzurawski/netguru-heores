import { ReactElement } from 'react';
import { PlusIcon, SparklesIcon, TrashIcon } from '@heroicons/react/solid';

interface IProps {
    handleOpenNewHero: () => void;
}

export function AddHeroButton({ handleOpenNewHero }: IProps): ReactElement {
    return (
        <button
            onClick={handleOpenNewHero}
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold w-full rounded-md py-2 px-4 sm:w-auto transition"
        >
            <div className="flex items-center justify-center sm:justify-left">
                <PlusIcon className="w-4 h-4 mr-2" />
                Add hero
            </div>
        </button>
    );
}

export function RandomizeButton(): ReactElement {
    return (
        <button className="bg-purple-500 hover:bg-purple-400 text-white font-semibold w-full rounded-md py-2 px-4 sm:w-auto transition">
            <div className="flex items-center justify-center sm:justify-left">
                <SparklesIcon className="w-4 h-4 mr-2" />
                I'm feeling lucky
            </div>
        </button>
    );
}

export function DeleteHeroButton(): ReactElement {
    return (
        <button className="hover:text-red-400 text-red-600 font-semibold w-auto rounded-md py-2 px-4 transition">
            <div className="flex items-center justify-center">
                <TrashIcon className="w-4 h-4 mr-2" />
                Delete hero
            </div>
        </button>
    );
}
