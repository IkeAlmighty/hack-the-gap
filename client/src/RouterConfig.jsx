import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router';

export default function RouterConfig() {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    );
}