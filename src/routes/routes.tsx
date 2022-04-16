import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from '../pages/dashboard';
import { PublicPage } from '../pages/home';
import { LoginPage } from '../pages/login';
import { PrivateRoutes } from './private-routes';

export function Router() {
	return (
		<Routes>
			<Route path='/' element={<PublicPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route element={<PrivateRoutes />}>
				<Route path='/dashboard' element={<DashboardPage />} />
			</Route>
		</Routes>
	);
}
