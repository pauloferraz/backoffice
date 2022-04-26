import { AuthStatus } from 'components/auth-status';
import { DarkModeContext } from 'contexts/dark-mode/darkModeContext';
import { useContext } from 'react';

type StateType = {
	darkMode: boolean;
};

export default function Header() {
	const { dispatch, state } = useContext(DarkModeContext);

	function icon(state: StateType) {
		return  state.darkMode ? 'fa-moon' : 'fa-sun'
	}

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
						<i className={`${icon(state)} fa-solid fa-fw`}></i>
						DARK MODE
					</button>
				</div>
				<div className='d-flex align-items-center'>
					<AuthStatus />
				</div>
			</div>
		</header>
	);
}
