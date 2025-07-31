import React from 'react';
import { QuienesSomosComponent } from './components/QuienesSomosComponent';
import { ExperienciaCompraComponent } from './components/ExperienciaCompraComponent';
import { LineasAsociadasComponent } from './components/LineasAsociadasComponent';
import { MediosPagoComponent } from './components/MediosPagoComponent';
import { BeneficiosComponent } from './components/BeneficiosComponent';

const HomeScreen: React.FC = ({ }) => {

	return (
		<main  className='grid grid-flow-row bg-white'>
			<QuienesSomosComponent/>
			<ExperienciaCompraComponent/>
			<LineasAsociadasComponent/>
			<MediosPagoComponent/>
			<BeneficiosComponent/>
		</main>
	);
};

export default HomeScreen;
