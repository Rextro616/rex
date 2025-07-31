"use client";
import React from 'react';

export type ObjetivoComponentProps = {
	// types...
}

const ObjetivoComponent: React.FC<ObjetivoComponentProps> = ({ }) => {
	return (
		<div id='objetivo' className='border border-gray-300 shadow-xl shadow-l-xl lg:pl-22 mr-8 mt-10'>
			<div className='flex flex-col gap-5 my-10 lg:mx-6 mx-10'>
				<p className='text-blue-cb font-aleo font-semibold text-3xl'>
					Objetivo
				</p>
				<p className='text-black text-xl font-aleo'>
					Darle la app que les permita la compra de boletos de una forma ágil y segura, donde su lealtad sea recompensada creando fidelidad a nuestra marca y para con los
					afiliados que cuentan con una herramienta digital que les permita posicionar sus ventas en el comercio digital e incrementando sustancialmente sus ventas y posicionamiento
					de marca.
				</p>
			</div>
		</div>
	);
};

export default ObjetivoComponent;
