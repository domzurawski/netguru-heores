import React, { ReactElement } from 'react';

export default function LoadingDots(): ReactElement {
    return (
        <div
            className={`flex items-center justify-center space-x-2 animate-pulse ${
                !false && 'hidden'
            }`}
        >
            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
        </div>
    );
}
