import React from 'react';
import backgroundLG from "@/assets/img/descargaApp/backgroundLG.webp";
import backgroundSM from "@/assets/img/descargaApp/backgroundSM.webp";
import iconsLG from "@/assets/img/descargaApp/iconsLG.webp";
import icons from "@/assets/img/descargaApp/iconsSM.webp";
import appstore from "@/assets/img/descargaApp/appstore.webp";
import huaweiApp from "@/assets/img/descargaApp/huawei_app.webp";
import googlePlay from "@/assets/img/descargaApp/googleplay.webp";
import telSm from "@/assets/img/descargaApp/telSm.webp";

const DescargaAppScreen: React.FC = ({ }) => {
	return (
		<div className='grid min-h-screen w-screen'>
			<div
				className='lg:grid hidden'
				style={{ backgroundImage: `url(${backgroundLG})`, backgroundSize: "100% 100%", width: "100%" }}
			>
				<div className='lg:grid hidden lg:grid-cols-2 bg-center align-middle items-center justify-center'>
					<div className='lg:flex justify-center align-middle items-center hidden'>
						<img src={iconsLG} alt="" className=' h-[70%] w-[70%] ml-[20%]' />
					</div>
					<div className='flex flex-col justify-center align-middle items-center font-poppins'>
						<div className='flex flex-col gap-4 items-center'>
							<p className='lg:text-5xl text-2xl text-black font-semibold text-center'>No importa el lugar <br /> ni la hora.</p>
							<p className='lg:text-2xl text-base text-blue-cb font-semibold'>Ahora estás más cerca de viajar.</p>
						</div>
						<div className='pt-10'>
							<p className='lg:text-2xl text-lg text-black font-semibold'>Haz click</p>
						</div>
						<div className='grid gap-2 pt-10'>
							<div className='flex justify-center align-middle items-center'>
								<img src={appstore} alt="" className='h-14' />
							</div>
							<div className='flex justify-center align-middle items-center'>
								<img src={googlePlay} alt="" className='h-13' />
							</div>
							<div className='flex justify-center align-middle items-center'>
								<img src={huaweiApp} alt="" className='h-13' />
							</div>
						</div>
					</div>
					<div className='lg:hidden flex flex-col justify-center align-middle items-center'>
						<img src={icons} alt="" className='h-56 w-56' />
					</div>
				</div>
			</div>
			{/*Vista para móviles*/}
			<div
				className='lg:hidden flex justify-center items-center align-middle bg-center bg-no-repeat'
				style={{ backgroundImage: `url(${backgroundSM})`, backgroundSize: "100% 100%", width: "100%" }}
			>
				<div className='flex flex-col font-poppins'>
					<div className='flex flex-col gap-4 items-center'>
						<p className='lg:text-4xl text-3xl text-black font-semibold text-center'>No importa el lugar <br /> ni la hora.</p>
						<p className='lg:text-xl text-lg text-blue-cb font-semibold'>Ahora estás más cerca de viajar.</p>
					</div>
					<div className='flex flex-row justify-center items-center align-middle pt-14 gap-4'>
						<div className='flex flex-col justify-center align-middle items-center'>
							<img src={telSm} alt="" className='h-72 w-36' />
						</div>
						<div className='flex flex-col justify-center items-center align-middle'>
							<p className='lg:text-2xl text-xl text-black font-semibold'>Haz click</p>
							<div className='grid gap-2 pt-4'>
								<div className='flex justify-center align-middle items-center'>
									<img src={appstore} alt="" className='h-10' />
								</div>
								<div className='flex justify-center align-middle items-center'>
									<img src={googlePlay} alt="" className='h-9' />
								</div>
								<div className='flex justify-center align-middle items-center'>
									<img src={huaweiApp} alt="" className='h-9' />
								</div>
							</div>
						</div>
					</div>
					<div className='lg:hidden flex flex-col justify-center align-middle items-center pt-22'>
						<img src={icons} alt="" className='h-56 w-56' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DescargaAppScreen;
