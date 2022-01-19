import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';
import { INewHero, IType, RootState } from 'types';

export default function AddHero(): ReactElement {
    const [newHero, setNewHero] = useState<INewHero>({
        avatarUrl: '',
        fullName: '',
        typeId: '',
        description: '',
    });

    const types: IType[] = useSelector(
        (state: RootState) => state.typesReducer
    );

    const handleChange = (
        e:
            | ChangeEvent<HTMLInputElement>
            | ChangeEvent<HTMLSelectElement>
            | ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setNewHero({ ...newHero, [name]: value });
    };

    const handleAddNewHero = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(newHero);
    };

    return (
        <form onSubmit={handleAddNewHero} className="h-full flex flex-col">
            <p className="font-bold">Add hero</p>

            <div className="w-20 h-20 rounded-full bg-blue-500 mt-8 mb-4 mr-4"></div>

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
                {types.map((type: IType) => (
                    <option key={type.id} value={type.id}>
                        {type.name}
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
                className="mt-1 block w-full border-0 focus:ring-emerald-500 focus:border-emerald-500 rounded-md resize-none mb-auto"
            />

            <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold w-full rounded-md py-2 px-4 sm:mt-4">
                Save
            </button>
        </form>
    );
}
