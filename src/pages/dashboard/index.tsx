import { useAuth } from 'contexts';
import Nav from '../../components/nav/nav';
import Header from '../../components/header/header';

export function DashboardPage() {
	let { signout } = useAuth();

	return (
		<div id="page-container" className="sidebar-l sidebar-o side-scroll header-navbar-fixed sidebar-dark page-header-dark enable-cookies">
			<Nav />

			<Header />
			<main id="main-container">
				<div className="content">
					content
				</div>
			</main>
		</div>
	);
}
