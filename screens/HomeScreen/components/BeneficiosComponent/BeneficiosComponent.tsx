import React from 'react';
import pdv from '@/assets/img/home/pdv.webp';
import bus from '@/assets/img/home/bus.webp';
import precio from '@/assets/img/home/precio.webp';
import descuento from '@/assets/img/home/descuento.webp';

const BeneficiosComponent: React.FC = ({ }) => {

	const beneficios = [
		{
			img: bus,
			titulo: "Más de 50 líneas de transporte",
			descripcion: "Compara precios, horarios, salidas, duración del viaje y más"
		},
		{
			img: precio,
			titulo: "Precios más bajos",
			descripcion: "Encuentra tus boletos más baratos"
		},
		{
			img: descuento,
			titulo: "Descuento en línea",
			descripcion: "Descuentos en línea exclusivos para viajeros CentralBus"
		},
		{
			img: pdv,
			titulo: "Red de PDV's de nivel nacional",
			descripcion: "Podrás pagar en cualquiera de nuestros 30,000 puntos de venta asociados a lo largo y ancho del país"
		}
	]

	return (
		<div className='grid lg:grid-cols-2 md:grid-cols-2 mx-20 my-10 gap-4'>
			{
				beneficios.map((beneficio, index) => (
					<div key={index} className='flex lg:flex-row flex-col space-x-4'>
						{
							beneficio.img === pdv ? (
								<div>
									<img src={beneficio.img} alt={beneficio.titulo} className="lg:w-[140px] lg:h-32" />
								</div>
							) : (
								<div>
									<img src={beneficio.img} alt={beneficio.titulo} className="lg:w-[125px] lg:h-30" />
								</div>
							)
						}
						<div className='flex flex-col items-start'>
							<p className='lg:text-2xl text-xl font-semibold text-black'>{beneficio.titulo}</p>
							<p className='lg:text-lg text-base text-black font-aleo'>{beneficio.descripcion}</p>
						</div>
					</div>
				))
			}
		</div>
	);
};

export default BeneficiosComponent;
