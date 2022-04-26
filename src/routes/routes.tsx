import { DashboardPage, DocumentPage, HelpPage, LoginPage, PostPage, PublicPage, SettingsPage, UserPage, WithdrawalPage } from 'pages';
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
				<Route path='/settings' element={<SettingsPage />} />
				<Route path='/help' element={<HelpPage />} />
				<Route path='/documents' element={<DocumentPage />} />
				<Route path='/withdrawal' element={<WithdrawalPage />} />
			</Route>
		</Routes>
	);
}
