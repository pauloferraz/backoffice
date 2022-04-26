import { Link } from 'react-router-dom';
import { AuthStatus } from 'components/auth-status';

export function Sidebar() {
	return (
		<div>
			<h2>Sidebar</h2>
			<AuthStatus />
			<ul>
				<li>
					<Link to='/'>Public Page</Link>
				</li>
				<li>
					<Link to='/login'>Login Page</Link>
				</li>
				<li>
					<Link to='/dashboard'>
						<i className="fa-solid fa-location-arrow"></i>
						Dashboard Page
					</Link>
				</li>
			</ul>
		</div>
	);
}
