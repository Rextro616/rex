import React from 'react';
import containerIzq from "@/assets/img/conoceCB/containerIzq.webp";

export type VisionComponentProps = {
	// types...
}

const VisionComponent: React.FC<VisionComponentProps> = ({ }) => {
	return (
		<div>
			<div className='lg:flex hidden bg-center bg-no-repeat p-10'
				style={{ backgroundImage: `url(${containerIzq})`, backgroundSize: "100% 300px", width: "100%", height: "300px" }}
			>
				<div className='flex flex-col items-end gap-4 my-10 mx-[25%]'>
					<p className='text-blue-cb font-aleo font-semibold text-3xl'>
						Visión
					</p>
					<p className='text-black text-lg w-[80%] font-aleo text-end'>
						Ser la empresa líder en venta de boletos de autobús con esquemas
						unicanal, posicionándonos inicialmente en México, a mediado plazo
						Latinoamérica y Estados Unidos.
					</p>
				</div>
			</div>
			<div className='lg:hidden flex border border-gray-300 shadow-xl shadow-l-xl lg:pl-22 mr-8 mt-5'>
				<div className='flex flex-col gap-5 my-10 lg:mx-6 mx-10'>
					<p className='text-blue-cb font-aleo font-semibold text-3xl'>
						Visión
					</p>
					<p className='text-black text-lg font-aleo'>
						Ser la empresa líder en venta de boletos de autobús con esquemas
						unicanal, posicionándonos inicialmente en México, a mediado plazo
						Latinoamérica y Estados Unidos.
					</p>
				</div>
			</div>
		</div>

	);
};

export default VisionComponent;
