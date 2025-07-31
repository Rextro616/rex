import React from 'react';
import containerDer from '@/assets/img/conoceCB/containerDer.webp';

export type MisionComponentProps = {
	// types...
}

const MisionComponent: React.FC<MisionComponentProps> = ({ }) => {
	return (
		<div id='mision'>
			<div className='lg:flex hidden bg-center bg-no-repeat p-10'
				style={{ backgroundImage: `url(${containerDer})`, backgroundSize: "100% 300px", width: "100%", height: "300px" }}
			>
				<div className='flex flex-col gap-4 my-5 mx-[25%]'>
					<p className='text-blue-cb font-aleo font-semibold text-3xl'>
						Misión
					</p>
					<p className='text-black text-lg w-[80%] font-aleo'>
						Maximizar la experiencia de compra y venta en línea de boletos de autobús, otorgando una herramienta más
						cómoda, segura y ágil con exposición nacional, está enfocado en siempre innovar y adaptar los servicios a las necesidades
						del usuario, sinedo reconocida por su alto grado de compromiso y excelente servicio ético referente en el sector.
					</p>
				</div>
			</div>
			<div className='lg:hidden flex border border-gray-300 shadow-xl shadow-l-xl lg:pl-22 ml-8 mt-5'>
				<div className='flex flex-col gap-5 my-10 lg:mx-6 mx-10'>
					<p className='text-blue-cb font-aleo font-semibold text-3xl'>
						Misión
					</p>
					<p className='text-black text-lg font-aleo'>
						Maximizar la experiencia de compra y venta en línea de boletos de autobús, otorgando una herramienta más
						cómoda, segura y ágil con exposición nacional, está enfocado en siempre innovar y adaptar los servicios a las necesidades
						del usuario, sinedo reconocida por su alto grado de compromiso y excelente servicio ético referente en el sector.
					</p>
				</div>
			</div>
		</div>

	);
};

export default MisionComponent;
