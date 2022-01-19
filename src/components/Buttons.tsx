import { ReactElement } from 'react';
import { PlusIcon, SparklesIcon, TrashIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

interface IProps {
    onClick: () => void;
}

export function AddHeroButton({ onClick }: IProps): ReactElement {
    return (
        <button
            onClick={onClick}
            data-testid="addHeroButton"
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold w-full rounded-md py-2 px-4 sm:w-auto transition"
        >
            <div className="flex items-center justify-center sm:justify-left">
                <PlusIcon className="w-4 h-4 mr-2" />
                Add hero
            </div>
        </button>
    );
}

export function RandomizeButton({ onClick }: IProps): ReactElement {
    return (
        <button
            onClick={onClick}
            className="bg-purple-500 hover:bg-purple-400 text-white font-semibold w-full rounded-md py-2 px-4 sm:w-auto transition"
        >
            <div className="flex items-center justify-center sm:justify-left">
                <SparklesIcon className="w-4 h-4 mr-2" />
                I'm feeling lucky
            </div>
        </button>
    );
}

export function DeleteHeroButton({ onClick }: IProps): ReactElement {
    return (
        <button
            onClick={onClick}
            className="hover:text-red-400 text-red-600 font-semibold w-auto rounded-md py-2 px-4 transition"
        >
            <div className="flex items-center justify-center">
                <TrashIcon className="w-4 h-4 mr-2" />
                Delete hero
            </div>
        </button>
    );
}

export function HomepageButton(): ReactElement {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate('/')}
            className="hover:text-blue-400 hover:border-blue-400 text-blue-600 font-semibold border border-blue-600 w-auto rounded-md py-2 px-4 transition"
        >
            Visit homepage
        </button>
    );
}
