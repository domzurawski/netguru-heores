import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout';

import Index from 'views/Index';

const App = () => {
    const publicRoutes = [
        { path: '/', component: <Index />, layout: <MainLayout /> },
        {
            path: '/details/:heroId',
            component: <Index />,
            layout: <MainLayout />,
        },
    ];

    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => (
                    <Route key={index} element={route.layout}>
                        <Route path={route.path} element={route.component} />
                    </Route>
                ))}
            </Routes>
        </Router>
    );
};

export default App;
