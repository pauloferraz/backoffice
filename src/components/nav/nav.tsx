import { ThemeContext } from 'contexts/theme/themeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContextType } from 'types/theme';

export default function Nav() {
	const { iconTheme, toggleTheme, toggleSidebar } = useContext(
		ThemeContext
	) as ThemeContextType;

	return (
		<nav id='sidebar' aria-label='Main Navigation'>
			<div className='content-header'>
				<a className='fw-semibold text-dual' href='index.html'>
					<span className='smini-visible'>
						<i className='fa fa-circle-notch text-primary'></i>
					</span>
					<span className='smini-hide fs-5 tracking-wider'>
						One<span className='fw-normal'>UI</span>
					</span>
				</a>

				<div>
					<button
						type='button'
						className='btn btn-sm btn-alt-secondary'
						data-toggle='layout'
						data-action='dark_mode_toggle'
						onClick={() => toggleTheme()}
					>
						<i className={`${iconTheme()} fa-solid fa-fw`}></i>
					</button>
					<button
						type='button'
						className='d-lg-none btn btn-sm btn-alt-secondary ms-1'
						data-toggle='layout'
						data-action='sidebar_close'
						onClick={() => toggleSidebar()}
					>
						<i className='fa fa-fw fa-times'></i>
					</button>
				</div>
			</div>
			<div
				className='content-side content-side-full js-sidebar-scroll'
				data-simplebar='init'
			>
				<ul className='nav-main'>
					<li className='nav-main-item'>
						<Link to='/dashboard' className='nav-main-link'>
							<i className='nav-main-link-icon fa-solid fa-location-arrow'></i>
							<span className='nav-main-link-name'>Dashboard</span>
						</Link>
					</li>
					<li className='nav-main-item'>
						<Link to='/users' className='nav-main-link'>
							<i className='nav-main-link-icon fa-solid fa-users'></i>
							<span className='nav-main-link-name'>Usuários</span>
						</Link>
					</li>
					<li className='nav-main-item'>
						<Link to='/posts' className='nav-main-link'>
							<i className='nav-main-link-icon fa-solid fa-signs-post'></i>
							<span className='nav-main-link-name'>Posts</span>
						</Link>
					</li>
					<li className='nav-main-item'>
						<Link to='/settings' className='nav-main-link'>
							<i className='nav-main-link-icon fa-solid fa-gear'></i>
							<span className='nav-main-link-name'>Configurações</span>
						</Link>
					</li>
					<li className='nav-main-item'>
						<Link to='/help' className='nav-main-link'>
							<i className='nav-main-link-icon fa-solid fa-life-ring'></i>
							<span className='nav-main-link-name'>Páginas de Help</span>
						</Link>
					</li>
					<li className='nav-main-item'>
						<Link to='/documents' className='nav-main-link'>
							<i className='nav-main-link-icon fa-solid fa-id-card'></i>
							<span className='nav-main-link-name'>Documentos</span>
						</Link>
					</li>
					<li className='nav-main-item'>
						<Link to='/withdrawal' className='nav-main-link'>
							<i className='nav-main-link-icon fa-solid fa-money-bill-transfer'></i>
							<span className='nav-main-link-name'>
								Solicitações de Retirada
							</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
