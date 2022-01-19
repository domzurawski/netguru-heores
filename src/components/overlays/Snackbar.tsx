import { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ISnackbarProps, RootState, SnackbarSeverity } from 'types';
import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import {
    CheckCircleIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import { hideSnackbar } from 'store/actions/snackbarActions';

export default function Snackbar(): ReactElement {
    const dispatch = useDispatch();
    const snackbar = useSelector((state: RootState) => state.snackbarReducer);

    const { isOpen, severity, message } = snackbar;

    useEffect(() => {
        const timeout = setTimeout(() => handleClose(), 1500);
        return () => clearTimeout(timeout);
    }, [snackbar]);

    const getAlertColor = (): ISnackbarProps => {
        switch (severity) {
            case SnackbarSeverity.ERROR:
                return {
                    text: 'text-red-600',
                    background: 'bg-red-50',
                    icon: (
                        <ExclamationCircleIcon
                            className="h-6 w-6 text-red-600"
                            aria-hidden="true"
                        />
                    ),
                };
            case SnackbarSeverity.SUCCESS:
                return {
                    text: 'text-green-600',
                    background: 'bg-green-50',
                    icon: (
                        <CheckCircleIcon
                            className="h-6 w-6 text-green-600"
                            aria-hidden="true"
                        />
                    ),
                };
            default:
                return {
                    text: 'text-white',
                    background: 'bg-white',
                    icon: <></>,
                };
        }
    };

    const alertColor = getAlertColor();

    const handleClose = () => dispatch(hideSnackbar());

    return (
        <>
            <div
                aria-live="assertive"
                className="fixed inset-0 flex px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
            >
                <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                    <Transition
                        show={isOpen}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div
                            className={`max-w-sm w-full ${alertColor.background} shadow-sm rounded-lg pointer-events-auto overflow-hidden`}
                        >
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        {alertColor.icon}
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p
                                            className={`text-sm font-medium ${alertColor.text}`}
                                        >
                                            {message}
                                        </p>
                                    </div>
                                    <div className="ml-4 flex-shrink-0 flex">
                                        <button
                                            className={`${alertColor.background} rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                                            onClick={handleClose}
                                        >
                                            <XIcon
                                                className={`h-5 w-5 ${alertColor.text}`}
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </>
    );
}
