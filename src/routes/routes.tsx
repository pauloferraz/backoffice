import { DashboardPage, LoginPage, PostPage, PublicPage, UserPage } from 'pages';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './private-routes';

export function Router() {
	return (
		<Routes>
			<Route path='/' element={<PublicPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route element={<PrivateRoutes />}>
				<Route path='/dashboard' element={<DashboardPage />} />
				<Route path='/posts' element={<PostPage />} />
				<Route path='/users' element={<UserPage />} />
			</Route>
		</Routes>
	);
}
