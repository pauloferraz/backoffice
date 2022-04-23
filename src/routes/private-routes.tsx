import { useAuth } from 'contexts';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

export function PrivateRoutes() {
	let { getCurrentAccount } = useAuth();
	let location = useLocation();

	if (!getCurrentAccount()) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	return <Outlet />;
}
