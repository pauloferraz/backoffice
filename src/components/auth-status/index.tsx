import { useAuth } from 'contexts/auth';

export function AuthStatus() {
	let { getCurrentAccount, signout } = useAuth();

	if (!getCurrentAccount()) {
		return <p>You are not logged in.</p>;
	}

	return (
		<p>
			Welcome!{' '}
			<button
				onClick={() => {
					signout();
				}}
			>
				Sign out
			</button>
		</p>
	);
}
