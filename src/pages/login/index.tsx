import * as React from 'react';
import { useAuth } from 'contexts/auth';
import { useNavigate, useLocation } from 'react-router-dom';

type LocationProps = {
	state: {
		from: Location;
	};
};

export function LoginPage() {
	let navigate = useNavigate();
	let location = useLocation() as unknown as LocationProps;
	let auth = useAuth();

	let from = location.state?.from?.pathname || '/';

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		let formData = new FormData(event.currentTarget);
		let username = formData.get('username') as string;

		auth.signin(username, () => {
			navigate(from, { replace: true });
		});
	}

	return (
		<div id="page-container" className="side-trans-enabled">
			<main id="main-container">
				<div className="hero-static d-flex align-items-center">
					<div className="w-100">
						<div className="bg-white">
							<div className="content content-full">
								<div className="row justify-content-center">
									<div className="col-md-8 col-lg-6 col-xl-4 py-4">
										<h1 className="mb-2">
											<div className="text-center">IMG TAG LOGO</div>
										</h1>
										<form
											onSubmit={handleSubmit}
											className="form-horizontal push-30-t"
											method="POST"
											action="#"
										>
											<div className="py-3">
												<div className="form-group">
													<label>Usuário</label>{' '}
													<input
														className="form-control form-control-lg form-control-alt text-lowercase"
														type="text"
														id="code"
														name="code"
														value=""
														placeholder="Digite o login.."
													/>
												</div>
												<div className="form-group">
													<label>Senha</label>{' '}
													<input
														className="form-control form-control-lg form-control-alt text-lowercase"
														type="password"
														id="password"
														name="password"
														value=""
														placeholder="Digite a senha.."
													/>
												</div>
												<div className="form-group">
													<div className="d-md-flex align-items-md-center justify-content-md-between">
														<div className="form-check">
															<input
																type="checkbox"
																className="form-check-input"
																id="remember"
																name="remember"
															/>
															<label
																className="form-check-label"
															>
																Lembrar-me
															</label>
														</div>
														<div className="py-2">
															<a
																className="font-size-sm"
																href="http://base.test/password/reset"
															>
																Esqueceu sua senha?
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className="form-group row justify-content-center mb-0">
												<div className="col-md-12 col-xl-12">
													<button
														type="submit"
														className="btn btn-block btn-primary"
													>
														Login
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="font-size-sm text-center text-muted py-3">
							<strong>Ferraroto's Corporation</strong> ©{' '}
							<span data-toggle="year-copy" className="js-year-copy-enabled">
								2022
							</span>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
