import React from 'react';
import { QueEsCBComponent } from './components/QueEsCBComponent';
import { ObjetivoComponent } from './components/ObjetivoComponent';
import { MisionComponent } from './components/MisionComponent';
import { VisionComponent } from './components/VisionComponent';
import { ValoresComponent } from './components/ValoresComponent';
import { PorqueElegirCBComponent } from './components/PorqueElegirCBComponent';

const ConoceCBScreen: React.FC = ({ }) => {

	return (
		<div className='grid grid-flow-row bg-white'>
			<QueEsCBComponent />
			<ObjetivoComponent />
			<MisionComponent />
			<VisionComponent />
			<ValoresComponent />
			<PorqueElegirCBComponent />
		</div>
	);
};

export default ConoceCBScreen;
