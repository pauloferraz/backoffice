import { DashboardPage, LoginPage, PublicPage } from 'pages';
import { Routes, Route } from 'react-router-dom';
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
