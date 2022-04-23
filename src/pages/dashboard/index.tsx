import { useAuth } from 'contexts';

export function DashboardPage() {
	let { signout } = useAuth();

	return (
		<h3>
			Dashboard{' '}
			<button
				onClick={() => {
					signout();
				}}
			>
				Sign out
			</button>
		</h3>
	);
}
