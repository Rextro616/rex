import React from 'react';
import mediosPago from '@/assets/img/home/mediosPago.webp';
import mediosPagoBancos from '@/assets/img/home/mediosPagoBancos.webp';
import mediosPagoTiendas from '@/assets/img/home/mediosPagoTiendas.webp';
import mediosPagoContainer from '@/assets/img/home/mediosPagoContainer.webp';

const MediosPagoComponent: React.FC = ({ }) => {
	return (
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
	);
};

export default MediosPagoComponent;
