import React, { ReactElement } from 'react';
import { AddHeroButton, RandomizeButton } from './Buttons';

interface Props {
    handleOpenNewHero: () => void;
}

export default function ControlsSection({
    handleOpenNewHero,
}: Props): ReactElement {
    return (
        <div className="sm:flex sm:space-y-0 grid-cols-12 gap-x-3 items-center mb-4 space-y-2">
            <AddHeroButton handleOpenNewHero={handleOpenNewHero} />
            <RandomizeButton />
        </div>
    );
}
