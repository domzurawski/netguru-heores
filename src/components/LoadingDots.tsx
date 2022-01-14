import React, { ReactElement } from 'react';

interface IProps {
    loadingHeroes: boolean;
}

export default function LoadingDots({ loadingHeroes }: IProps): ReactElement {
    return (
        <div
            className={`flex items-center justify-center space-x-2 animate-pulse ${
                !loadingHeroes && 'hidden'
            }`}
        >
            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
        </div>
    );
}
