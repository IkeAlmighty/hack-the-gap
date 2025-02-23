import Home from './pages/Home.jsx'
import StudentProfile from './pages/StudentProfile.jsx';
import TagInfo from './pages/TagInfo.jsx';
import { Routes, Route } from 'react-router';

export default function RouterConfig() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/student-profile" element={<StudentProfile />} />
            <Route path="/tags/Attention" element={<TagInfo />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}