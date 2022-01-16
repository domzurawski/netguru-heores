import { HomepageButton } from 'components/Buttons';
import { ReactElement } from 'react';

export default function NotFound(): ReactElement {
    return (
        <div className="h-screen w-screen flex flex-col space-around p-16 sm:p-0">
            <div className="text-center m-auto">
                <p
                    className="text-blue-600 font-black"
                    style={{ fontSize: '86px' }}
                >
                    OOPS!
                </p>
                <p className="mb-6 text-2xl">
                    We can't find the page you're looking for.
                </p>
                <HomepageButton />
            </div>
        </div>
    );
}
