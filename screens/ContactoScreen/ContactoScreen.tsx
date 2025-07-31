import React from 'react';
import personIcon from "@/assets/icons/contacto/personIcon.webp";
import gpsIcon from "@/assets/icons/contacto/gpsIcon.webp";
import emailIcon from "@/assets/icons/contacto/emailIcon.webp";
import phoneIcon from "@/assets/icons/contacto/phoneIcon.webp";

export type ContactoScreenProps = {
	// types...
}

const ContactoScreen: React.FC<ContactoScreenProps> = ({ }) => {
	return (
		<div className="flex flex-col justify-between gap-10 bg-slate-100 p-8 font-aleo">
			{/* Título */}
			<div className="pt-10">
				<p className='text-center text-blue-cb text-2xl font-semibold mb-6'>Contáctanos</p>
			</div>

			{/* Tarjeta principal */}
			<div className="flex justify-center">
				<div className="relative bg-white rounded-2xl shadow-2xl px-[8%] pt-20 pb-10 max-w-md w-full">
					{/* Ícono superior */}
					<div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
						<div className="bg-[#40b3dd] clip-hex shadow-md flex items-center justify-center w-20 h-20">
							<img src={personIcon} alt="" className="h-10 w-10" />
						</div>
						<p className="text-blue-cb font-semibold text-xl mt-2">CentralBus</p>
					</div>
					<div className='flex flex-col justify-center align-middle items-center'>
						<div className="flex items-center gap-3 mt-6">
							<img src={phoneIcon} alt="Teléfono" className="h-6" />
							<a href="tel:+529633074549" className="text-blue-cb font-semibold text-lg">
								963 307 4549
							</a>
						</div>
						<div className="flex items-center gap-3 mt-4">
							<img src={emailIcon} alt="Correo" className="h-6" />
							<a href="mailto:contacto@centralbus.mx" className="text-blue-cb font-semibold text-lg">
								contacto@centralbus.mx
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Footer con dirección */}
			<div className="flex items-center justify-center gap-4 bg-blue-cb rounded-lg p-6 mt-10">
				<img src={gpsIcon} alt="Ubicación" className="h-8" />
				<p className="text-white text-center text-lg">
					Andador de los lirios Número 285, Colonia primavera, Tuxtla Gutiérrez Chiapas
				</p>
			</div>
		</div>

	);
};

export default ContactoScreen;
