import { useAuth } from 'contexts/auth';

export default function Header() {
	let { getCurrentAccount, signout } = useAuth();

	if (!getCurrentAccount()) {
		return <p>You are not logged in.</p>;
	}

	return (
		<header id="page-header">
			<div className='content-header'>
				<div className="d-flex align-items-center">
					<div className="dropdown d-inline-block ms-2">
						<button type="button" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn btn-sm  btn-alt-secondary  d-flex align-items-center">
							<span className="d-none d-sm-inline-block ml-1">Nome completo</span>
							<span className="d-block d-sm-none ml-1">nome</span>
						</button>
						<div aria-labelledby="page-header-user-dropdown" className="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0">
							<div className="p-3 text-center bg-body-light border-bottom rounded-top">
								<p className="mt-2 mb-0 fw-medium">nome completo</p>
								<p className="mb-0 text-muted fs-sm fw-medium">algum detalhe</p>
							</div>
							<div className="p-2">
								<a href="/profile#settings" data-toggle="layout" className="dropdown-item d-flex align-items-center justify-content-between rounded">
									Configurações
									<i className="fa-fw fad fa-cogs"></i>
								</a>
							</div>
							<div role="separator" className="dropdown-divider m-0"></div>
							<div className="p-2">
								<button onClick={() => {
									signout();
								}} className="dropdown-item d-flex align-items-center justify-content-between rounded">
									<i className="fad fa-sign-out-alt"></i> Sair
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
