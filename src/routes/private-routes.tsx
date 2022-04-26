import Header from 'components/header';
import Nav from 'components/nav/nav';
import { useAuth } from 'contexts';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

export function PrivateRoutes() {
	let { getCurrentAccount } = useAuth();
	let location = useLocation();

	if (!getCurrentAccount()) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	return (
		<div
			id='page-container'
			className='sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow'
		>
			<Nav />
			<Header />
			<main id='main-container'>
				<div className='content'>
					<div className='d-flex flex-column flex-md-row justify-content-md-between align-items-md-center py-2 text-center text-md-start'>
						<Outlet />
					</div>
				</div>
			</main>
		</div>
	);
}
