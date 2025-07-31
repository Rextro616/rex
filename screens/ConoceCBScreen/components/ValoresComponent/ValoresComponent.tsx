import React from 'react';
import containerDer from "@/assets/img/conoceCB/containerDer.webp";

export type ValoresComponentProps = {
	// types...
}

const ValoresComponent: React.FC<ValoresComponentProps> = ({ }) => {
	return (
		<div id='valores'>
			<div className='lg:flex hidden bg-center bg-no-repeat p-10 pt-10'
				style={{ backgroundImage: `url(${containerDer})`, backgroundSize: "100% 300px", width: "100%", height: "300px" }}
			>
				<div className='flex flex-col gap-4 my-10 mx-[25%]'>
					<p className='text-blue-cb font-aleo font-semibold text-3xl'>
						Valores
					</p>
					<div className='grid grid-cols-3 gap-4 text-black text-lg w-[100%] font-aleo'>
						<div>
							<li>Pasión</li>
							<li>Responsabilidad</li>
							<li>Confianza</li>
						</div>
						<div>
							<li>Innovación</li>
							<li>Trabajo en equipo</li>
							<li>Respeto</li>
						</div>
						<div>
							<li>Honestidad</li>
							<li>Calidad</li>
							<li>Fidelización</li>
						</div>
					</div>
				</div>
			</div>
			<div className='lg:hidden flex border border-gray-300 shadow-xl shadow-l-xl lg:pl-22 ml-8 mt-5'>
				<div className='flex flex-col gap-5 my-10 lg:mx-6 mx-10'>
					<p className='text-blue-cb font-aleo font-semibold text-3xl'>
						Valores
					</p>
					<div className='flex flex-col justify-start text-lg text-black'>
						<li>Pasión</li>
						<li>Responsabilidad</li>
						<li>Confianza</li>
						<li>Innovación</li>
						<li>Trabajo en equipo</li>
						<li>Respeto</li>
						<li>Honestidad</li>
						<li>Calidad</li>
						<li>Fidelización</li>
					</div>
				</div>
			</div>
		</div>

	);
};

export default ValoresComponent;
