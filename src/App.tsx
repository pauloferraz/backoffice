import { AuthProvider } from 'contexts/auth';
import { Router } from 'routes/routes';

export default function App() {
	return (
		<AuthProvider>
			<Router />
		</AuthProvider>
	);
}
