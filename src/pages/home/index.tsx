import { Link } from 'react-router-dom';
import { AuthStatus } from '../../hooks/user';

export function PublicPage() {
	return (
		<div>
			<h1>Site homepage</h1>
			<AuthStatus />
			<ul>
				<li>
					<Link to='/'>Public Page</Link>
				</li>
				<li>
					<Link to='/login'>Login Page</Link>
				</li>
			</ul>
		</div>
	);
}
