import React from 'react';

const TerminosCondicionesComponent: React.FC = ({ }) => {

	const terminosYCondiciones = [
		{
			section: "1. Aceptación de Términos",
			items: [
				{
					id: "1.1",
					title: "Usuarios aceptados",
					content:
						"Estos Términos se aplican a todos los usuarios de la aplicación, incluyendo aquellos que simplemente navegan por la aplicación y aquellos que realizan compras.",
				},
				{
					id: "1.2",
					title: "Cambios en los Términos",
					content:
						"Nos reservamos el derecho de cambiar, modificar o revisar estos Términos en cualquier momento. Cualquier cambio significativo se notificará a los usuarios de manera oportuna.",
				},
			],
		},
		{
			section: "2. Uso de la Aplicación",
			items: [
				{
					id: "2.1",
					title: "Registro y Cuenta",
					content:
						"Al registrarse en la aplicación, usted garantiza que toda la información proporcionada es precisa y completa. Usted es responsable de mantener la confidencialidad de su cuenta y contraseña.",
				},
				{
					id: "2.2",
					title: "Uso Apropiado",
					content:
						"Usted acepta utilizar la aplicación solo con fines legales y de acuerdo con estos términos. No debe utilizar la Aplicación de manera que pueda dañar, deshabilitar, sobrecargar o perjudicar la aplicación.",
				},
				{
					id: "2.3",
					title: "Propiedad Intelectual",
					content:
						"Todos los derechos de propiedad intelectual de la aplicación y su contenido pertenecen a Gorigeek S.A. de C.V. Nº de registro: 03-2024-011110484000-01. Usted acepta no reproducir, distribuir, modificar o crear obras derivadas basadas en la aplicación sin nuestro consentimiento previo por escrito.",
				},
			],
		},
		{
			section: "3. Formas de pago en canales electrónicos",
			items: [
				{
					id: "3.1",
					title: "Pasarela de pago",
					content:
						"Las transacciones serán efectuadas mediante la pasarela Openpay. Se aceptan tarjetas VISA, MasterCard y American Express.",
				},
				{
					id: "3.2",
					title: "Seguridad bancaria",
					content:
						"Las medidas de seguridad en la compra las determina su banco, por lo que la aplicación no asume la responsabilidad de ello.",
				},
				{
					id: "3.3",
					title: "Pago en efectivo (PAYNET)",
					content:
						"Elije el método de pago en efectivo, obtén tu orden de pago y paga en la red de tiendas de conveniencia de todo el país.",
				},
				{
					id: "3.4",
					title: "Validación del pago",
					content:
						"Una vez que realices tu pago en cualquiera de las tiendas autorizadas, se validará la transacción y recibirás directamente en tu correo tus boletos de viajes.",
				},
			],
		},
		{
			section: "4. Compra de Boletos",
			items: [
				{
					id: "4.1",
					title: "Reservas",
					content:
						"La aplicación permite la compra y reserva de boletos de autobús. Usted acepta proporcionar información precisa y válida durante el proceso de reserva.",
				},
				{
					id: "4.2",
					title: "Pago Seguro",
					content:
						"Al realizar una compra, usted acepta pagar el monto total especificado. Los pagos se procesarán a través de métodos de pago seguros para garantizar la confidencialidad de la información financiera.",
				},
				{
					id: "4.3",
					title: "Confirmación de Reserva",
					content:
						"La confirmación de reserva se enviará a la dirección de correo electrónico proporcionada. Le recomendamos que revise detenidamente la confirmación para verificar la precisión de la información.",
				},
				{
					id: "4.4",
					title: "Errores del medio de pago",
					content:
						"CentralBus no garantiza que los servicios realizados por la empresa responsable de los pagos estén libres de errores, interrupciones, mal funcionamiento, retrasos u otro tipo de imperfección.",
				},
				{
					id: "4.5",
					title: "Errores externos",
					content:
						"CentralBus no se responsabiliza por cualquier daño, perjuicio o pérdida del cliente causada por fallas del sistema o Internet ocasionadas por terceros.",
				},
				{
					id: "4.6",
					title: "Compra no aprobada",
					content:
						"Si una compra no fue aprobada por nuestro sistema interno, será cancelada automáticamente. La información sobre la transacción estará disponible en la sección de pagos.",
				},
			],
		},
		{
			section: "5. Cancelaciones y Reembolsos",
			items: [
				{
					id: "5.1",
					title: "Política de Cancelación",
					content:
						"Las cancelaciones están sujetas a las políticas de cancelación de los proveedores de servicios de transporte. Lea cuidadosamente las políticas antes de realizar una reserva.",
				},
				{
					id: "5.2",
					title: "Reembolsos",
					content:
						"Los reembolsos están sujetos a las políticas de los proveedores. CentralBus no garantiza reembolsos ni se hace responsable de las decisiones de los proveedores.",
				},
				{
					id: "5.3",
					title: "Modificación de Reservas",
					content:
						"En algunos casos, puede ser posible modificar una reserva sujeta a disponibilidad y políticas de los proveedores.",
				},
			],
		},
		{
			section: "6. Responsabilidades",
			items: [
				{
					id: "6.1",
					title: "Responsabilidad del Usuario",
					content:
						"Usted es responsable de su conducta y del uso adecuado de la aplicación. Cualquier violación puede resultar en la terminación de su cuenta.",
				},
				{
					id: "6.2",
					title: "Responsabilidad de CentralBus",
					content:
						"CentralBus no se hace responsable de la calidad de los servicios proporcionados por los proveedores, aunque se esfuerza por garantizar su calidad y seguridad.",
				},
			],
		},
		{
			section: "7. Modificaciones y Terminación",
			items: [
				{
					id: "7.1",
					title: "Modificaciones en la Aplicación",
					content:
						"CentralBus se reserva el derecho de modificar, suspender o descontinuar la aplicación en cualquier momento sin previo aviso.",
				},
				{
					id: "7.2",
					title: "Terminación de Cuenta",
					content:
						"Nos reservamos el derecho de terminar su cuenta y acceso a la Aplicación en caso de violación de estos Términos o por cualquier razón justificada.",
				},
			],
		},
		{
			section: "8. Privacidad",
			items: [
				{
					id: "",
					title: "",
					content:
						"La privacidad del usuario es importante. Consulte la Política de Privacidad para entender cómo se maneja su información.",
				},
			],
		},
		{
			section: "9. Ley Aplicable y Resolución de Disputas",
			items: [
				{
					id: "9.1",
					title: "Ley Aplicable",
					content:
						"Estos Términos se regirán por las leyes mexicanas del estado de Chiapas.",
				},
				{
					id: "9.2",
					title: "Resolución de Disputas",
					content:
						"Las disputas se resolverán por negociación de buena fe o, en su defecto, ante tribunales de Tuxtla Gutiérrez, Chiapas.",
				},
				{
					id: "9.3",
					title: "Uso de cupones y descuentos",
					content:
						"Los cupones tienen condiciones específicas. Solo se puede usar uno por usuario. No son reembolsables ni modificables.",
				},
			],
		},
		{
			section: "10. Líneas de autobuses afiliadas",
			items: [
				{
					id: "",
					title: "",
					content:
						"Los boletos con líneas afiliadas a Grupo Estrella Blanca, Ejecutivos de Sureste y Xonab no son transferibles, reembolsables ni modificables.",
				},
			],
		},
	];

	return (
		<div className='flex flex-col mx-[14%] gap-2 text-black text-lg'>
			<p>
				Lea detenidamente estos Términos y Condiciones de Uso ("Términos") antes de utilizar la aplicación móvil CentralBus ("La Aplicación")
				proporcionada por Gorigeek S.A. de C.V. con Nº de registro de la empresa: 201700163437.
				Al acceder o utilizar la Aplicación, usted acepta estar sujeto a estos Términos.
			</p>
			{
				terminosYCondiciones.map((item, index) => (
					<div tabIndex={index} className='pt-4 pb-4'>
						<p className='font-semibold text-2xl'>
							{item.section}
						</p>
						<div className='flex flex-col gap-1 justify-start'>
							{item.items.map((info, index) => (
								<p key={index}>
									<span className='font-black'>{`${info.id} ${info.title}${info.title == "" ? "" : ":"} `}</span>
									{info.content}
								</p>
							))}

						</div>
					</div>
				))
			}
		</div>
	);
};

export default TerminosCondicionesComponent;
