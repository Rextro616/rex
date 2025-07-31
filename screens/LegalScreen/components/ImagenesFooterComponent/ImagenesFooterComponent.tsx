import React from 'react';
import iconBus from "@/assets/img/aviso_tyc/iconBus.webp";
import iconTyC2 from "@/assets/img/aviso_tyc/iconTyC2.webp";

const ImagenesFooterComponent: React.FC = ({ }) => {
	return (
		<div className='flex flex-row pt-10'>
			<div className='lg:flex hidden w-[20%]'>
				<img src={iconTyC2} alt="" className='w-[60%] h-[100%]' />
			</div>
			<div className='flex flex-col lg:w-[80%] w-[100%] items-end align-bottom justify-end'>
				<img src={iconBus} alt="" className='lg:w-[100%] lg:h-[60%] w-[100%] h-[100%] lg:pb-0 pb-2' />
			</div>
		</div>
	);
};

export default ImagenesFooterComponent;
