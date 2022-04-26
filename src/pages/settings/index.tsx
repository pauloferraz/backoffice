
export function SettingsPage() {
	return (
		<div>
			<div className='row'>
				<div className="d-flex">
					<h1 className='fw-light'>Informações de Contato</h1>
				</div>
				<div className='col-12 col-md-12 col-sm-12'>
					<div className='block block-rounded'>
						<div className='block-content'>
							3.1.1 Cadastrar informação de Copyright Content<br />
							3.1.2 Informação de contato com a plataforma<br />
							3.1.3 Informação telefônico e WhatsApp com a plataforma<br />
							3.1.4 Informação de Endereço de contato da plataforma
						</div>
					</div>
					<div className="d-flex">
						<h1 className='fw-light'>Informações de SMTP</h1>
					</div>
					<div className='block block-rounded'>
						<div className='block-content'>
							 Configuração do sistema de smtp da plataforma ou configuração do mailgun
						</div>
					</div>
					<div className="d-flex">
						<h1 className='fw-light'>Live Video Settings</h1>
					</div>
					<div className='block block-rounded'>
						<div className='block-content'>
							3.3.1 Upload de imagem de placeholder que deverá aparecer enquanto a live não se inicia<br />
							3.3.2 Confgurações do Agora APP<br />
							3.3.3 Configuração do percentual de comissão do admin<br />
						</div>
					</div>
					<div className="d-flex">
						<h1 className='fw-light'>Social</h1>
					</div>
					<div className='block block-rounded'>
						<div className='block-content'>
							3.4.1 Configurações de endereços de rede social da plataforma
						</div>
					</div>
					<div className="d-flex">
						<h1 className='fw-light'>Site</h1>
					</div>
					<div className='block block-rounded'>
						<div className='block-content'>
							3.5.1 Configurações da Logo do site<br />
							3.5.2 Configuração do nome do site<br />
							3.5.3 Configuração do endereço do site<br />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
