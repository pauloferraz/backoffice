import { AuthStatus } from 'components/auth-status';
import { DarkModeContext } from 'contexts/dark-mode/darkModeContext';
import { useContext } from 'react';

export default function Header() {
	const { dispatch } = useContext(DarkModeContext);

	return (
		<header id='page-header'>
			<div className='content-header'>
				<div>
					<button
						type='button'
						className='btn btn-sm btn-alt-secondary'
						data-toggle='layout'
						data-action='dark_mode_toggle'
						onClick={() => dispatch({ type: 'TOGGLE' })}
					>
						DARK MODE
						<i className='far fa-moon'></i>
					</button>
				</div>
				<div className='d-flex align-items-center'>
					<AuthStatus />
				</div>
			</div>
		</header>
	);
}
