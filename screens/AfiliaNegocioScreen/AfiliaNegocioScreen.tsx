import { FormField } from '@/components/forms/FormField';
import { useForm, type FormItem } from '@/hooks/global.hooks';
import React, { useState } from 'react';
import background from "@/assets/img/afiliate/fondo-bus.webp";
import type { Afiliate } from '@/interfaces/afiliate/afiliate.interface';

export type AfiliaNegocioScreenProps = {
	// types...
}

const AfiliaNegocioScreen: React.FC<AfiliaNegocioScreenProps> = ({ }) => {

	const itemsForm: FormItem[] = [
		{
			titulo: "Nombre de la empresa",
			placeholder: "Ej. CentralBus",
			tipo: "text",
			requiereValidacion: true
		},
		{
			titulo: "Nombre del contacto",
			placeholder: "Ej. Andrés Juárez",
			tipo: "text",
			requiereValidacion: true
		},
		{
			titulo: "Correo",
			placeholder: "Ej. centralbus@centralbus.mx",
			tipo: "email",
			requiereValidacion: true,
			obligatorio: true
		},
		{
			titulo: "Celular",
			placeholder: "Ej. 55 5255 2254",
			tipo: "number",
			maxLongitud: 10,
			requiereValidacion: true,
			obligatorio: true
		},
		{
			titulo: "Página web",
			placeholder: "Ej. centralbus.mx",
			tipo: "url",
			requiereValidacion: true
		},
		{
			titulo: "Seleccione el sector de su empresa",
			placeholder: "Seleccione una opción",
			tipo: "select",
			opciones: [
				{
					valor: "turismo",
					titulo: "Turismo"
				}
			]
		}
	];

	const [afiliateForm, setAfiliateForm] = useState<Record<string, string | number>>({
		nombreEmpresa: '',
		nombreContacto: '',
		correo: '',
		celular: '',
		paginaWeb: '',
		sector: 0,
	});

	function enviarFormulario() {
		console.log(afiliateForm)
	}

	return (
		<div
			className="grid w-screen bg-black p-4"
			style={{ backgroundImage: `url(${background})`, backgroundSize: "100% 100%", width: "100%" }}
		>
			<div className="grid lg:grid-cols-2 items-center justify-center w-full gap-4">
				<div className="lg:grid hidden lg:grid-cols-2 relative w-full h-full">
					{/* Texto superior izquierdo */}
					<div className="absolute top-10 left-10 text-white font-aleo text-xl lg:text-2xl font-semibold leading-tight text-left">
						La plataforma<br />
						digital que<br />
						multiplica tus<br />
						ventas!
					</div>

					{/* Texto inferior derecho */}
					<div className="absolute bottom-10 right-10 text-white font-aleo text-xl lg:text-2xl font-semibold leading-tight text-right">
						Maximizamos la<br />
						experiencia en la<br />
						compra de boletos
					</div>
				</div>

				<div className="bg-white rounded-2xl lg:p-10 lg:m-10 p-10">
					<div className="flex flex-col items-center gap-6">
						<p className="text-blue-cb font-aleo text-3xl sm:text-4xl text-center">
							Afíliate hoy mismo
						</p>

						<div className="flex flex-col w-full font-aleo">
							<FormField
								items={itemsForm}
								formData={afiliateForm}
								setFormData={setAfiliateForm}
								onSubmit={enviarFormulario}
							/>
						</div>
					</div>
				</div>

			</div>
		</div>

	);
};

export default AfiliaNegocioScreen;
