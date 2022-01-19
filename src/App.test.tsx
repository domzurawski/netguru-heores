import * as ReactDOM from 'react-dom';
import { store } from 'store/store';
import App from './App';
import { Provider as ReduxProvider } from 'react-redux';

it('renders App without crashing', () => {
    const root = document.createElement('div');
    ReactDOM.render(
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>,
        root
    );
});
