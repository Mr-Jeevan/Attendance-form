import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import FacialAttendanceLanding from './pages/LandingPage/LandingPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import McaOne from './pages/McaOne.jsx';


// ⛔ Utility: Redirect to prevent back navigation
const PreventBackNav = () => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.pathname === '/mca') {
			window.history.pushState(null, '', window.location.href);
			const onPopState = () => {
				navigate('/mca', { replace: true });
			};
			window.addEventListener('popstate', onPopState);
			return () => {
				window.removeEventListener('popstate', onPopState);
			};
		}
	}, [location, navigate]);

	return null;
};

function App() {
	return (
		<Router>
			<PreventBackNav />
			<Routes>
				<Route path="/" element={<FacialAttendanceLanding />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/mca" element={<McaOne />} />
			</Routes>
		</Router>
	);
}

export default App;
