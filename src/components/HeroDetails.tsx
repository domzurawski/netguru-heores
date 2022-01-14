import { XIcon } from '@heroicons/react/solid';
import { ReactElement } from 'react';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { DeleteHeroButton } from './Buttons';

export default function HeroDetails(): ReactElement {
    const handleClose = () => {};

    return (
        <Transition.Root show={true}>
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
                            <XIcon
                                onClick={handleClose}
                                className="text-gray-500 hover:text-gray-400 cursor-pointer h-6 w-6 float-right transition"
                            />

                            <div className="w-28 h-28 rounded-full bg-blue-500 mt-8 my-6 mx-auto"></div>

                            <p className="font-bold text-center">Mr. Avocado</p>

                            <p className="text-gray-800 text-center mb-4">
                                Doctor
                            </p>

                            <p className="text-gray-800 text-left mb-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Pellentesque erat orci, egestas
                                sit amet luctus gravida, fermentum vitae enim.
                                Nulla facilisi. Quisque molestie ligula a nisl
                                tempor aliquam.
                            </p>

                            <div className="text-center">
                                <DeleteHeroButton />
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
