
export function DocumentPage() {
	return (
		<div>
			<div className='row'>
				<div className="d-flex">
					<h1 className='fw-light'>Documentos</h1>
					<div className="ms-auto">
						<a href="#" className="btn btn-primary">
							<i className="fa-solid fa-plus me-1"></i> Novo
						</a>
					</div>
				</div>
				<div className='col-12 col-md-12 col-sm-12'>
					<div className='block block-rounded'>
						<div className='block-content'>
							<table className='table table-sm table-vcenter'>
								<thead>
									<tr>
										<th>Nome</th>
										<th className='d-none d-sm-table-cell'>Último Acesso</th>
										<th className="text-center">Ações</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className='fw-semibold fs-sm'>Richard Roe</td>
										<td className='d-none d-sm-table-cell'>há 2 dias</td>
										<td className="text-center">
											<div className="btn-group">
												<button type="button" className="btn btn-sm btn-alt-secondary js-bs-tooltip-enabled" data-bs-toggle="tooltip" title="" data-bs-original-title="Edit Client">
													<i className="fa-solid fa-fw fa-pencil-alt"></i>
												</button>
												<button type="button" className="btn btn-sm btn-alt-secondary js-bs-tooltip-enabled" data-bs-toggle="tooltip" title="" data-bs-original-title="Remove Client">
													<i className="fa-solid fa-fw fa-times"></i>
												</button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
							<nav aria-label="Page navigation">
								<ul className="pagination justify-content-center">
									<li className="page-item">
										<a className="page-link" aria-label="Previous">
											<span aria-hidden="true">
												<i className="fa fa-angle-double-left"></i>
											</span>
											<span className="visually-hidden">Previous</span>
										</a>
									</li>
									<li className="page-item active">
										<a className="page-link">1</a>
									</li>
									<li className="page-item">
										<a className="page-link">2</a>
									</li>
									<li className="page-item disabled">
										<a className="page-link">3</a>
									</li>
									<li className="page-item">
										<a className="page-link">4</a>
									</li>
									<li className="page-item">
										<a className="page-link" aria-label="Next">
											<span aria-hidden="true">
												<i className="fa fa-angle-double-right"></i>
											</span>
											<span className="visually-hidden">Next</span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
