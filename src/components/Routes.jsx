import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Profile from './Profile.jsx';
import Map from './Map.jsx';
import About from './About.jsx';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/map" element={<Map />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;