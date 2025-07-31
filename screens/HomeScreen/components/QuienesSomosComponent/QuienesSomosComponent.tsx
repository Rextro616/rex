import React from 'react';
import mainImage from '@/assets/img/home/welcome.webp';
import phoneImage from '@/assets/img/home/phone.webp';
import QR from '@/assets/img/home/QR.webp';
import optionsDownload from '@/assets/img/home/optionsDownload.webp';
import mainImageSM from '@/assets/img/home/welcome-sm.webp';

const QuienesSomosComponent: React.FC = ({ }) => {
	return (
		<div>
			<div id="quienes-somos" className="lg:grid hidden grid-cols-2 bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${mainImage})`, backgroundSize: "100% 100%", width: "100%", height: "550px" }}>
				<div className="hidden lg:block" />
				<div className="pt-24">
					<div className='flex flex-row items-center'>
						<div className='flex flex-col mx-20 w-[35%]'>
							<p className="font-aleo text-6xl font-bold text-[#023171]">
								Central<span className="text-[#426baf]">Bus</span>
							</p>
							<div className='flex flex-col mt-2'>
								<p className=' text-gray-cb text-xl font-semibold font-aleo'>
									La app que maximiza tu
									experiencia en la compra
									de boletos
								</p>
								<p className='text-blue-cb text-base font-semibold font-aleo'>
									Descarga nuestra app disponible en
									AppStore y Google Play
								</p>
							</div>
							<div className='flex flex-col items-start justify-center h-full mt-2'>
								<div className='flex flex-row items-center justify-start gap-2'>
									<p className='h-2 w-2 bg-blue-cb mr-2'></p>
									<p className='text-sm text-black font-aleo'>Compra sin filas y demoras en cualquier momento</p>
								</div>
								<div className='flex flex-row items-center justify-start gap-2'>
									<p className='h-2 w-2 bg-blue-cb mr-2'></p>
									<p className='text-sm text-black font-aleo'>Encuentra las mejores rutas a nivel nacional</p>
								</div>
								<div className='flex flex-row items-center justify-start gap-2'>
									<p className='h-2 w-2 bg-blue-cb mr-2'></p>
									<p className='text-sm text-black font-aleo'>Aprovecha nuestras promociones y descuentos</p>
								</div>
								<div className='flex flex-row items-center justify-start gap-2'>
									<p className='h-2 w-2 bg-blue-cb mr-2'></p>
									<p className='text-sm text-black font-aleo'>Paga boletos desde tu celular</p>
								</div>
								<div className='flex flex-row items-center justify-start gap-2'>
									<p className='h-2 w-2 bg-blue-cb mr-2'></p>
									<p className='text-sm text-black font-aleo'>O en efectivo en cadenas comerciales participantes</p>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center">
							<div className="space-y-4">
								<img src={QR} alt="QR" className="w-[80%] h-auto" />
								<img src={optionsDownload} alt="Descarga" className="w-[80%] h-auto" />
							</div>
							<div className=''>
								<img src={phoneImage} alt="App" className="w-[100%] h-auto" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:hidden md:flex block">
				<img src={mainImageSM} alt="" />
			</div>
		</div>
	);
};

export default QuienesSomosComponent;
