export function DashboardPage() {
	return (
		<div className='row'>
			<h1 className='fw-light'>Dashboard</h1>
			<div className='col-sm-4'>
				<div className='block block-rounded'>
					<div className='block-content'>
						<p className='text-center py-6'>postagens</p>
					</div>
				</div>
			</div>
			<div className='col-sm-4'>
				<div className='block block-rounded'>
					<div className='block-content'>
						<p className='text-center py-6'>usuários comuns</p>
					</div>
				</div>
			</div>
			<div className='col-sm-4'>
				<div className='block block-rounded'>
					<div className='block-content'>
						<p className='text-center py-6'>usuários premium</p>
					</div>
				</div>
			</div>
			<div className='col-6'>
				<div className='block block-rounded'>
					<div className='block-header block-header-default'>
						<h3 className='block-title'>Usuários Recentes</h3>
					</div>
					<div className='block-content'>
						<table className='table table-sm table-vcenter'>
							<tbody>
								<tr>
									<td className='fw-semibold fs-sm'>Richard Roe</td>
									<td className='d-none d-sm-table-cell'>há 2 dias</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className='col-6'>
				<div className='block block-rounded'>
					<div className='block-header block-header-default'>
						<h3 className='block-title'>Usuários Premium</h3>
					</div>
					<div className='block-content'>
						<table className='table table-sm table-vcenter'>
							<thead>
								<tr>
									<th>Nome</th>
									<th className='d-none d-sm-table-cell'>Último Acesso</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className='fw-semibold fs-sm'>Richard Roe</td>
									<td className='d-none d-sm-table-cell'>há 15 minutos</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
