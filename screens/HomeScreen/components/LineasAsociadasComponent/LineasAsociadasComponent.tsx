import React from 'react';

const LineasAsociadasComponent: React.FC = ({ }) => {

	const busLines = [
		'acn',
		'acnGranClase',
		'ado',
		'adoAeropuerto',
		'adoConecta',
		'occ',
		'albatros',
		'cuencaExpress',
		'ecoPlusRegios',
		'estrellaDeOro',
		'estrellaDeOroPlus',
		'etn',
		'autobusesDelEvora',
		'hp',
		'ibusTranspais',
		'parhikuniBusinessClass',
		'parhikuniExpress',
		'parhikuniPlatino',
		'parhikuniPremiumClass',
		'parhikuniUltra',
		'senda',
		'timPremier',
		'transpaisUnico',
		'transpaisVista',
		'transportesDelNorte',
		'tufesa',
		'turimex',
		'u',
		'unicoMix',
		'ejecutivosDelSureste',
		'xonabTours',
	];

	return (
		<div className='flex flex-col p-10'>
			<div>
				<p className='text-3xl font-aleo font-semibold text-[#023171]'>Líneas de autobuses asociadas</p>
			</div>
			<div className='grid grid-cols-2 lg:grid-cols-5 gap-6 pt-10 pl-6 pr-6'>
				{
					busLines.map((linea, index) => {

						return (
							<div key={index} className="flex justify-center items-center">
								<img
									src={`/src/assets/img/home/autobuses/${linea}.webp`}
									alt={linea}
									className="object-contain h-18 w-auto"
								/>
							</div>
						)
					})
				}
			</div>
		</div>
	);
};

export default LineasAsociadasComponent;
