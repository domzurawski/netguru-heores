import { render, screen } from '@testing-library/react';
import { AddHeroButton } from './Buttons';

test('renders AddHeroButton', () => {
    render(<AddHeroButton onClick={() => null} />);
    const addHeroButton = screen.getByText(/Add hero/i);

    expect(addHeroButton).toBeInTheDocument();
});

test('renders AddHeroButton with class "transition"', () => {
    render(<AddHeroButton onClick={() => console.log(null)} />);
    const addHeroButton = screen.getAllByTestId('addHeroButton')[0];

    expect(addHeroButton).toHaveClass('transition');
});
