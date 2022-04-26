import { useAuth } from 'contexts/auth';
import { useNavigate } from 'react-router-dom';

export function AuthStatus() {
	let { getCurrentAccount, signout } = useAuth();
	const navigate = useNavigate();

	return (
		<div className='dropdown d-inline-block ms-2'>
			{getCurrentAccount() ? (
				<div className='d-flex'>
					<button
						type='button'
						className='btn btn-sm btn-alt-secondary d-flex align-items-center'
						id='page-header-user-dropdown'
						data-bs-toggle='dropdown'
						aria-haspopup='true'
						aria-expanded='false'
					>
						<img
							className='rounded-circle'
							src='https://i.pravatar.cc/30'
							alt='Header Avatar'
						/>
						<span className='d-none d-sm-inline-block ms-2'>John Doe</span>
					</button>
					<button
						className='btn btn-sm'
						onClick={() => {
							signout();
						}}
					>
						Sair
					</button>
				</div>
			) : (
				<button
					className='btn btn-sm'
					onClick={() => {
						navigate('/login');
					}}
				>
					Entrar
				</button>
			)}
		</div>
	);
}
