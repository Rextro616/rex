import React from 'react';
import image from "@/assets/img/conoceCB/image.webp";
import icon01 from '@/assets/icons/conoceCB/icon01.webp';
import icon02 from '@/assets/icons/conoceCB/icon02.webp';
import icon03 from '@/assets/icons/conoceCB/icon03.webp';
import icon04 from '@/assets/icons/conoceCB/icon04.webp';
import icon05 from '@/assets/icons/conoceCB/icon05.webp';
import icon06 from '@/assets/icons/conoceCB/icon06.webp';
import icon07 from '@/assets/icons/conoceCB/icon07.webp';
import icon08 from '@/assets/icons/conoceCB/icon08.webp';

const PorqueElegirCBComponent: React.FC = ({ }) => {

	const listaVentajasCB = [
		{
			icono: icon01,
			descripcion: "Simplificamos los tiempos, adiós a las largas final, todas tus compras desde un dispositivo móvil Android o iOS."
		},
		{
			icono: icon02,
			descripcion: "Cambiamos la experiencia de viajar, mientras más viajes realices, ganas recompensas, promociones y descuentos por tu lealtad"
		},
		{
			icono: icon03,
			descripcion: "Comparas y eliges los mejores destinos, horarios y precios de diferentes líneas de autobuses a nivel nacional."
		},
		{
			icono: icon04,
			descripcion: "Contamos con una red en toda la república mexicana de más de 30,000 puntos de venta y agentes de ventas CentralBus, donde podrás comprar boletos."
		},
		{
			icono: icon05,
			descripcion: "Tus compras siempre serán seguras y garantizamos tu compra validando tu destino con nuestro QR o Código de barras."
		},
		{
			icono: icon06,
			descripcion: "Encuentra descuentos especiales para estudiantes, tercera edad, mochileros y personal de gobierno."
		},
		{
			icono: icon07,
			descripcion: "En caso de cambio de planes podrás cancelar o posponer el viaje sin costo"
		},
		{
			icono: icon08,
			descripcion: "Contamos con un call de atención a clientes 24x7 para resolver tus dudas o aclaraciones."
		}
	];

	return (
		<div id='porque' className='flex flex-row gap-5 justify-center lg:pl-22 pt-10 pb-10 font-aleo'>
			<div className='flex flex-col gap-10 lg:w-[60%]'>
				<p className='text-blue-cb lg:text-4xl text-3xl font-semibold lg:text-left text-center'>
					¿Por qué elegir CentralBus?
				</p>
				<div className='flex flex-col gap-5'>
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
			<div className='lg:flex hidden w-[40%] justify-center items-center align-middle'>
				<img src={image} alt="" className='w-[90%] h-[90%]' />
			</div>
		</div>
	);
};

export default PorqueElegirCBComponent;
