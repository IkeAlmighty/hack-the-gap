import Home from './pages/Home.jsx';
import TagInfo from './pages/TagInfo.jsx';
import { Routes, Route } from 'react-router';

export default function RouterConfig() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/tags/:studentTag" element={<TagInfo />} />
        </Routes>
    );
}