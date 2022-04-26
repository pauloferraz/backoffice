import { AuthStatus } from 'components/auth-status';

export default function Header() {
	return (
		<header id='page-header'>
			<div className='content-header'>
				<div></div>
				<div className='d-flex align-items-center'>
					<AuthStatus />
				</div>
			</div>
		</header>
	);
}
