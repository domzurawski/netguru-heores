import { XIcon } from '@heroicons/react/solid';
import { ChangeEvent, ReactElement, useState } from 'react';
import { IHero, IHeroType } from 'types';

import { useDispatch } from 'react-redux';
import { hideModal } from 'store/actions/modalActions';
import { handleAddNewHero } from 'utils/heroesREST';

export default function AddHero(): ReactElement {
    const dispatch = useDispatch();

    const [newHero, setNewHero] = useState<IHero>({
        id: '',
        imgUrl: '',
        name: '',
        type: '',
        description: '',
    });

    const heroTypes: IHeroType[] = [
        { value: 'animal', title: 'Animal' },
        { value: 'doctor', title: 'Doctor' },
        { value: 'millionaire', title: 'Millionaire' },
    ];

    const handleChange = (
        e:
            | ChangeEvent<HTMLInputElement>
            | ChangeEvent<HTMLSelectElement>
            | ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setNewHero({ ...newHero, [name]: value });
    };

    const handleClose = () => dispatch(hideModal());

    return (
        <>
            <div className="flex space-between items-center">
                <p className="font-bold flex-1">Add hero</p>
                <XIcon
                    onClick={handleClose}
                    className="text-gray-500 hover:text-gray-400 cursor-pointer h-6 w-6 transition"
                />
            </div>
            <div className="w-20 h-20 rounded-full bg-blue-500 mt-8 mb-4 mr-4"></div>

            <form onSubmit={(e) => handleAddNewHero(e, newHero)}>
                <label
                    htmlFor="imgUrl"
                    className="block text-sm font-medium text-gray-500"
                >
                    Avatar URL
                </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="imgUrl"
                    id="imgUrl"
                    className="mt-1 block w-full border-0 focus:ring-emerald-500 focus:border-emerald-500 rounded-md mb-2"
                />

                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-500"
                >
                    Full name
                </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full border-0 focus:ring-emerald-500 focus:border-emerald-500 rounded-md mb-2"
                />

                <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-500"
                >
                    Type
                </label>
                <select
                    onChange={handleChange}
                    id="type"
                    name="type"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md mb-2 text-gray-500"
                    defaultValue="Select type"
                >
                    <option disabled>Select type</option>
                    {heroTypes.map((heroType: IHeroType, index: number) => (
                        <option key={index} value={heroType.value}>
                            {heroType.title}
                        </option>
                    ))}
                </select>

                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-500"
                >
                    Description
                </label>
                <textarea
                    onChange={handleChange}
                    name="description"
                    id="description"
                    rows={6}
                    className="mt-1 block w-full border-0 focus:ring-emerald-500 focus:border-emerald-500 rounded-md mb-2 resize-none"
                />

                <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold w-full rounded-md py-2 px-4">
                    Save
                </button>
            </form>
        </>
    );
}
