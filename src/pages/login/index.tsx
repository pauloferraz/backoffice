import * as React from 'react';
import { useAuth } from 'contexts/auth';
import { useNavigate, useLocation } from 'react-router-dom';

type LocationProps = {
	state: {
		from: Location;
	};
};

export function LoginPage() {
	let navigate = useNavigate();
	let location = useLocation() as unknown as LocationProps;
	let auth = useAuth();

	let from = location.state?.from?.pathname || '/';

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		let formData = new FormData(event.currentTarget);
		let username = formData.get('username') as string;

		auth.signin(username, () => {
			navigate(from, { replace: true });
		});
	}

	return (
		<div>
			<p>You must log in to view the page at {from}</p>

			<form onSubmit={handleSubmit}>
				<label>
					Username: <input name='username' type='text' />
				</label>{' '}
				<button type='submit'>Login</button>
			</form>
		</div>
	);
}
