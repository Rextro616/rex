import React from 'react';
import { TituloComponent } from './components/TituloComponent';
import { ImagenesFooterComponent } from './components/ImagenesFooterComponent';
import { useLocation } from 'react-router-dom';
import { AvisoPrivacidadComponent } from './components/AvisoPrivacidadComponent';
import { TerminosCondicionesComponent } from './components/TerminosCondicionesComponent';

const LegalScreen: React.FC = ({ }) => {

	const location = useLocation();
	const esAviso: boolean = location.pathname == "/aviso_privacidad";

	return (
		<div className='bg-white font-aleo'>
			<div className='grid grid-flow-row'>
				<TituloComponent esAviso={esAviso}/>
				{
					esAviso ?
					(
						<AvisoPrivacidadComponent/>
					) :
					 (
						<TerminosCondicionesComponent/>
					 )
				}
				<ImagenesFooterComponent />
			</div>
		</div>
	);
};

export default LegalScreen;
