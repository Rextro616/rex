import React from 'react';
import mapaDesktop from '@/assets/img/home/mapaDesktop.webp';
import mapaMovil from '@/assets/img/home/mapaMovil.webp';

const ExperienciaCompraComponent: React.FC = ({ }) => {
	return (
		<div>
			<div className="
					flex justify-center align-middle items-center
					text-center p-2 lg:text-2xl text-base bg-gradient-to-r from-indigo-200 via-violet-500 to-blue-500
					text-white font-semibold"
			>
				<p>Disfruta de la nueva experiencia de compra de boletos CentralBus</p>
			</div>
			<div className="lg:block hidden">
				<img src={mapaDesktop} />
			</div>
			<div className="lg:hidden block">
				<img src={mapaMovil} />
			</div>
		</div>
	);
};

export default ExperienciaCompraComponent;
