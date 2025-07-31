import React from 'react';
import mainImage from '../../assets/img/home/welcome.webp';
import phoneImage from '../../assets/img/home/phone.webp';
import QR from '../../assets/img/home/QR.webp';
import optionsDownload from '../../assets/img/home/optionsDownload.webp';
import mainImageSM from '../../assets/img/home/welcome-sm.webp';
import mapaDesktop from '../../assets/img/home/mapaDesktop.webp';
import mapaMovil from '../../assets/img/home/mapaMovil.webp';
import mediosPago from '../../assets/img/home/mediosPago.webp';
import mediosPagoBancos from '../../assets/img/home/mediosPagoBancos.webp';
import mediosPagoTiendas from '../../assets/img/home/mediosPagoTiendas.webp';
import mediosPagoContainer from '../../assets/img/home/mediosPagoContainer.webp';
import pdv from '../../assets/img/home/pdv.webp';
import bus from '../../assets/img/home/bus.webp';
import precio from '../../assets/img/home/precio.webp';
import descuento from '../../assets/img/home/descuento.webp';

export type HomeScreenProps = {
	// types...
}

const HomeScreen: React.FC<HomeScreenProps> = ({ }) => {

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

	const beneficios = [
		{
			img: bus,
			titulo: "Más de 50 líneas de transporte",
			descripcion: "Compara precios, horarios, salidas, duración del viaje y más"
		},
		{
			img: precio,
			titulo: "Precios más bajos",
			descripcion: "Encuentra tus boletos más baratos"
		},
		{
			img: descuento,
			titulo: "Descuento en línea",
			descripcion: "Descuentos en línea exclusivos para viajeros CentralBus"
		},
		{
			img: pdv,
			titulo: "Red de PDV's de nivel nacional",
			descripcion: "Podrás pagar en cualquiera de nuestros 30,000 puntos de venta asociados a lo largo y ancho del país"
		}
	]

	return (
		<div className='flex flex-col bg-white'>
			<div className='lg:pt-0 pt-22'>
				<div id="quienes-somos" className="hidden lg:grid grid-cols-2 w-full h-full p-14 bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: `url(${mainImage})` }}
				>
					<div className="hidden lg:block">

					</div>
					<div className="flex flex-row items-center">
						<div className='flex flex-col mx-22 w-[30%]'>
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
									<p className=' text-sm text-black'>Compra sin filas y demoras en cualquier momento</p>
								</div>
								<div className='flex flex-row items-center justify-start gap-2'>
									<p className='h-2 w-2 bg-blue-cb mr-2'></p>
									<p className=' text-sm text-black'>Encuentra las mejores rutas a nivel nacional</p>
								</div>
								<div className='flex flex-row items-center justify-start gap-2'>
									<p className='h-2 w-2 bg-blue-cb mr-2'></p>
									<p className=' text-sm text-black'>Aprovecha nuestras promociones y descuentos</p>
								</div>
								<div className='flex flex-row items-center justify-start gap-2'>
									<p className='h-2 w-2 bg-blue-cb mr-2'></p>
									<p className=' text-sm text-black'>Paga boletos desde tu celular</p>
								</div>
								<div className='flex flex-row items-center justify-start gap-2'>
									<p className='h-2 w-2 bg-blue-cb mr-2'></p>
									<p className=' text-sm text-black'>O en efectivo en cadenas comerciales participantes</p>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center space-x-6">
							<div className="space-y-4">
								<img src={QR} alt="QR" className="w-40 h-auto" />
								<img src={optionsDownload} alt="Descarga" className="w-40 h-auto" />
							</div>
							<img src={phoneImage} alt="App" className="w-48 h-auto" />
						</div>
					</div>
				</div>
				<div className="lg:hidden md:flex block">
					<img src={mainImageSM} alt="" />
				</div>
			</div>
			<div>
				<div className="
					flex justify-center align-middle items-center
					text-center p-2 lg:text-2xl text-base bg-gradient-to-r from-indigo-200 via-violet-500 to-blue-500
					text-white font-semibold"
				>
					<p>Disfruta de la nueva experiencia de compra de boletos CentralBus</p>
				</div>
				<div className="lg:block hidden">
					<img src={mapaDesktop} />
				</div>
				<div className="lg:hidden block">
					<img src={mapaMovil} />
				</div>
			</div>
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
			<div>
				<div className="lg:flex hidden">
					<div className="flex flex-col align-middle justify-center bg-center bg-no-repeat p-10"
						style={{ backgroundImage: `url(${mediosPagoContainer})`, backgroundSize: "100% 500px", width: "100%", height: "550px" }}
					>
						<div className="lg:flex hidden flex-row">
							<div className="flex flex-col w-[35%] pt-48 gap-10">
								<div className="flex text-center justify-center items-center mr-16">
									<p className="text-2xl font-bold font-aleo">Pagos desde la app CentralBus</p>
								</div>
								<div className="flex justify-center align-middle items-center mb-2 mr-20">
									<img src={mediosPagoBancos} className="w-96" />
								</div>
							</div>
							<div className="flex flex-col w-[65%] justify-center items-center align-middle gap-10 pt-10">
								<div className="mr-16">
									<h1 className="text-3xl font-semibold font-aleo">Pagos en efectivo en cadenas comerciales</h1>
								</div>
								<div className="lg:mr-8 xl:mr-16">
									<img src={mediosPagoTiendas} className="w-[800px] h-[200px]" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:hidden block p-2">
					<div className="fondo-pagos-sm">
						<img src={mediosPago} alt="" />
					</div>
				</div>
			</div>
			<div className='grid lg:grid-cols-2 md:grid-cols-2 mx-20 my-10 gap-4'>
				{
					beneficios.map((beneficio, index) => (
						<div key={index} className='flex lg:flex-row flex-col space-x-4'>
							{
								beneficio.img === pdv ? (
									<div>
										<img src={beneficio.img} alt={beneficio.titulo} className="lg:w-44 lg:h-32" />
									</div>
								) : (
									<div>
										<img src={beneficio.img} alt={beneficio.titulo} className="lg:w-30 lg:h-30" />
									</div>
								)
							}
							<div className='flex flex-col items-start'>
								<p className='lg:text-2xl text-xl font-semibold text-black'>{beneficio.titulo}</p>
								<p className='lg:text-lg text-base text-black font-aleo'>{beneficio.descripcion}</p>
							</div>
						</div>
					))
				}
			</div>
		</div>
	);
};

export default HomeScreen;
