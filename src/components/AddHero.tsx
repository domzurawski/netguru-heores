import { XIcon } from '@heroicons/react/solid';
import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import { IHero, IHeroType } from 'types';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'store/actions/modalActions';

export default function AddHero(): ReactElement {
    const dispatch = useDispatch();
    const modal = useSelector((state: RootStateOrAny) => state.modalReducer);

    const [newHero, setNewHero] = useState<IHero>({
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

    const handleAddNewHero = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(newHero);
    };

    const handleClose = () => {
        dispatch(closeModal());
    };

    return (
        <Transition.Root show={modal}>
            <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                onClose={handleClose}
            >
                <div className="flex items-end justify-center min-h-screen text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block p-6 rounded-none bg-gray-100 w-screen h-screen sm:w-full sm:h-full sm:max-w-md sm:rounded-lg align-middle text-left transform transition-all">
                            <div className="flex space-between items-center">
                                <p className="font-bold flex-1">Add hero</p>
                                <XIcon
                                    onClick={handleClose}
                                    className="text-gray-500 hover:text-gray-400 cursor-pointer h-6 w-6 transition"
                                />
                            </div>
                            <div className="w-20 h-20 rounded-full bg-blue-500 mt-8 mb-4 mr-4"></div>

                            <form onSubmit={handleAddNewHero}>
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
                                    {heroTypes.map(
                                        (
                                            heroType: IHeroType,
                                            index: number
                                        ) => (
                                            <option
                                                key={index}
                                                value={heroType.value}
                                            >
                                                {heroType.title}
                                            </option>
                                        )
                                    )}
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
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
