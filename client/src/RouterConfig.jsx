import Home from './pages/Home.jsx'
import StudentProfile from './pages/StudentProfile.jsx';
import { Routes, Route } from 'react-router';

export default function RouterConfig() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/student-profile" element={<StudentProfile />} />
        </Routes>
    );
}