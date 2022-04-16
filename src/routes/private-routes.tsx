import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/auth';

export function PrivateRoutes() {
	let auth = useAuth();
	let location = useLocation();

	if (!auth.user) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	return <Outlet />;
}
