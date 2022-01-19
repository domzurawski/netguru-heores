import { ReactElement } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from 'store/actions/modalActions';
import AddHero from 'components/AddHero';
import HeroDetails from 'components/HeroDetails';
import { ModalContent, RootState } from 'types';
import { XIcon } from '@heroicons/react/solid';

export default function Modal(): ReactElement {
    const dispatch = useDispatch();

    const { isOpen, component, hero } = useSelector(
        (state: RootState) => state.modalReducer
    );

    const handleClose = () => dispatch(hideModal());

    const renderModalContent = () => {
        switch (component) {
            case ModalContent.ADD_HERO:
                return <AddHero />;
            case ModalContent.HERO_DETAILS:
                return <HeroDetails hero={hero} />;
            default:
                return null;
        }
    };

    return (
        <Transition.Root show={isOpen}>
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
                        <div className="inline-block p-6 rounded-none bg-gray-100 w-screen h-screen sm:w-full sm:h-full sm:max-w-sm sm:rounded-lg align-middle text-left transform transition-all">
                            <button
                                onClick={handleClose}
                                className="text-gray-500 hover:text-gray-400 cursor-pointer h-6 w-6 transition float-right"
                            >
                                <XIcon />
                            </button>
                            {renderModalContent()}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
