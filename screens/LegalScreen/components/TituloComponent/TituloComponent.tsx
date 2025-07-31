import React from 'react';
import iconCB from "@/assets/img/aviso_tyc/iconCB.webp";
import iconTyC from "@/assets/img/aviso_tyc/iconTyC.webp";

export type TituloComponent = {
	esAviso: boolean
}

const TituloComponent: React.FC<TituloComponent> = ({ esAviso }) => {

	return (
		<div className='flex lg:flex-row flex-col items-center align-middle justify-between'>
			<div className='lg:flex hidden justify-center align-middle items-center pl-20'>
				<img src={iconCB} alt="" className='w-26 h-32' />
			</div>
			<p className='text-blue-cb text-3xl font-semibold text-center pt-4 pb-4'>
				{
					esAviso ? "AVISO DE PRIVACIDAD CENTRALBUS" : "TÉRMINOS Y CONDICIONES CENTRALBUS"
				}
			</p>
			<div className='lg:flex hidden'>
				<img src={iconTyC} alt="" className='w-52 h-72' />
			</div>
		</div>
	);
};

export default TituloComponent;
