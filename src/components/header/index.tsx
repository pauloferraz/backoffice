import { useContext } from 'react';
import { ThemeContextType } from 'types/theme';
import { AuthStatus } from 'components/auth-status';
import { ThemeContext } from 'contexts/theme/themeContext';

export default function Header() {
	const { toggleSidebar } = useContext(ThemeContext) as ThemeContextType;

	return (
		<header id='page-header'>
			<div className='content-header'>
				<div>
					<button
						type='button'
						className='btn btn-sm btn-alt-secondary me-2 d-lg-none'
						data-toggle='layout'
						data-action='sidebar_toggle'
						onClick={() => toggleSidebar()}
					>
						<i className='fa fa-fw fa-bars'></i>
					</button>
				</div>
				<div className='d-flex align-items-center'>
					<AuthStatus />
				</div>
			</div>
		</header>
	);
}
