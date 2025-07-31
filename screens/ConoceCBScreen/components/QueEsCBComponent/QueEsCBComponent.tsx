import React from 'react';
import presentacionCB from '@/assets/img/conoceCB/presentacionCB.webp'
import icon01 from '@/assets/icons/conoceCB/icon01.webp';
import icon02 from '@/assets/icons/conoceCB/icon02.webp';
import icon03 from '@/assets/icons/conoceCB/icon03.webp';
import icon04 from '@/assets/icons/conoceCB/icon04.webp';

const QueEsCBComponent: React.FC = ({ }) => {

	const listaVentajasCB = [
		{
			icono: icon01,
			descripcion: "Tu marca contará con exposición a nivel nacional."
		},
		{
			icono: icon02,
			descripcion: "Mejorará la experiencia integral de viaje de usuario."
		},
		{
			icono: icon03,
			descripcion: "Facilitará la logística de viajes."
		},
		{
			icono: icon04,
			descripcion: "Venderás más boletos de forma ágil y segura."
		}
	];

	return (
		<div id='quienes_somos' className='flex flex-row justify-center lg:pl-22 pt-10 font-aleo'>
			<div className='flex flex-col gap-10 lg:w-[70%] lg:mx-0 mx-5'>
				<p className='text-blue-cb lg:text-4xl text-3xl font-semibold lg:text-left text-center'>¿Qué es CentralBus?</p>
				<div className='flex flex-col gap-5'>
					<p className='text-black text-xl text-justify'>
						Somos la mejor plataforma digital de venta de boletos online, tus clientes ahorrarán tiempo al comprar boletos desde la
						comodidad de sus dispositivos móviles, disponible en iOS y Android, o bien elegir un PDV de la red de CentralBus.
					</p>
					{
						listaVentajasCB.map((item, index) => (
							<div className='flex flex-row gap-4 items-center' tabIndex={index}>
								<img src={item.icono} alt="" className='h-12 w-12' />
								<p className='text-black lg:text-xl text-lg'>
									{item.descripcion}
								</p>
							</div>
						))
					}
				</div>
			</div>
			<div className='lg:flex hidden w-[30%] justify-center items-center align-middle'>
				<img src={presentacionCB} alt="" className='w-80 h-80' />
			</div>
		</div>
	);
};

export default QueEsCBComponent;
