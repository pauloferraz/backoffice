import { useContext } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { ThemeContextType } from 'types/theme';
import Header from 'components/header';
import Nav from 'components/nav/nav';
import { useAuth } from 'contexts';
import { ThemeContext } from 'contexts/theme/themeContext';

export function PrivateRoutes() {
	let { getCurrentAccount } = useAuth();
	let location = useLocation();
	const { theme } = useContext(ThemeContext) as ThemeContextType;

	if (!getCurrentAccount()) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	return (
		<div
			id='page-container'
			className={`sidebar-o ${
				theme.darkMode ? 'page-header-dark dark-mode sidebar-dark' : ''
			} enable-page-overlay side-scroll page-header-fixed main-content-narrow ${
				theme.sidebarOpen ? 'sidebar-o-xs side-trans-enabled' : ''
			}`}
		>
			<Nav />
			<Header />
			<main id='main-container'>
				<div className='content'>
					<Outlet />
				</div>
			</main>
		</div>
	);
}
