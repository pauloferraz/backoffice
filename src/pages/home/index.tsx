import { Link } from 'react-router-dom';
import { AuthStatus } from 'components/auth-status';

export function PublicPage() {
	return (
		<div id='page-container' className='sidebar-dark side-scroll page-header-fixed page-header-dark main-content-boxed'>
			<header id='page-header'>
				<div className='content-header'>
					<div className='d-flex align-items-center'>
						<a className='fw-semibold fs-5 tracking-wider text-dual me-3' href='index.html'>
							One<span className='fw-normal'>UI</span>
						</a>
					</div>

					<div className='d-flex align-items-center'>
						<div className='d-none d-lg-block'>
							<ul className='nav-main nav-main-horizontal nav-main-hover'>
							<li className='nav-main-item'>
								<a className='nav-main-link active' href='gs_landing.html'>
								<i className='nav-main-link-icon si si-home'></i>
								<span className='nav-main-link-name'>Home</span>
								</a>
							</li>
							<li className='nav-main-item'>
								<a className='nav-main-link' href='javascript:void(0)'>
								<i className='nav-main-link-icon si si-rocket'></i>
								<span className='nav-main-link-name'>Features</span>
								</a>
							</li>
							<li className='nav-main-item'>
								<Link to='/' className='nav-main-link'>Public Page</Link>
							</li>
							<li className='nav-main-item'>
								<Link to='/login' className='nav-main-link'>Login Page</Link>
							</li>
							</ul>
						</div>
					</div>
				</div>
			</header>

			<main id="main-container">
				<AuthStatus />
			</main>
		</div>
	);
}
