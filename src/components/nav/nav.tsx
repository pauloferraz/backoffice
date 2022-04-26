import { Link } from 'react-router-dom';

export default  function Nav() {
	return (
		<nav id="sidebar" aria-label="Main Navigation">
			<div className="content-header text-center">
				<a className="bg-white p-1 rounded col-7" href="/">
					backoffice
				</a>
			</div>
			<div className="content-side content-side-full js-sidebar-scroll" data-simplebar="init">
				<ul className="nav-main">
					<li className="nav-main-item">
						<Link to='/dashboard' className="nav-main-link">
							<i className="nav-main-link-icon fa-solid fa-location-arrow"></i>
							<span className="nav-main-link-name">Dashboard</span>
						</Link>
					</li>
					<li className="nav-main-item">
						<Link to='/users' className="nav-main-link">
							<i className="nav-main-link-icon fa-solid fa-users"></i>
							<span className="nav-main-link-name">Usuários</span>
						</Link>
					</li>
					<li className="nav-main-item">
						<Link to='/posts' className="nav-main-link">
							<i className="nav-main-link-icon fa-solid fa-signs-post"></i>
							<span className="nav-main-link-name">Posts</span>
						</Link>
					</li>
					<li className="nav-main-item">
						<Link to='/posts' className="nav-main-link">
							<i className="nav-main-link-icon fa-solid fa-gear"></i>
							<span className="nav-main-link-name">Configurações</span>
						</Link>
					</li>
					<li className="nav-main-item">
						<Link to='/posts' className="nav-main-link">
							<i className="nav-main-link-icon fa-solid fa-life-ring"></i>
							<span className="nav-main-link-name">Páginas de Help</span>
						</Link>
					</li>
					<li className="nav-main-item">
						<Link to='/posts' className="nav-main-link">
							<i className="nav-main-link-icon fa-solid fa-money-bill-transfer"></i>
							<span className="nav-main-link-name">Solicitações de Retirada</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
