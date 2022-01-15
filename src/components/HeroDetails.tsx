import { XIcon } from '@heroicons/react/solid';
import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { hideModal } from 'store/actions/modalActions';
import { DeleteHeroButton } from './Buttons';

export default function HeroDetails(): ReactElement {
    const dispatch = useDispatch();

    const handleClose = () => dispatch(hideModal());

    return (
        <>
            <XIcon
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-400 cursor-pointer h-6 w-6 float-right transition"
            />

            <div className="w-28 h-28 rounded-full bg-blue-500 mt-8 my-6 mx-auto"></div>

            <p className="font-bold text-center">Mr. Avocado</p>

            <p className="text-gray-800 text-center mb-4">Doctor</p>

            <p className="text-gray-800 text-left mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque erat orci, egestas sit amet luctus gravida,
                fermentum vitae enim. Nulla facilisi. Quisque molestie ligula a
                nisl tempor aliquam.
            </p>

            <div className="text-center">
                <DeleteHeroButton onClick={() => console.log('abcd')} />
            </div>
        </>
    );
}
