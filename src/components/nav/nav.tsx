
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
						<a className="nav-main-link" href="#">
							<i className="nav-main-link-icon fad fa-location-arrow"></i>
							<span className="nav-main-link-name">Menu Link</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
