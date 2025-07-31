import React from 'react';

const AvisoPrivacidadComponent: React.FC = ({ }) => {

	const avisosDePrivacidad = [
		{
			section: "1. Información Recopilada:",
			items: [
				{
					id: "1.1",
					title: "Información de Registro",
					content:
						"Al registrarse en la Aplicación, recopilamos información personal, como nombre, dirección de correo electrónico, número de teléfono y preferencias de usuario.",
				},
				{
					id: "1.2",
					title: "Información de Pago",
					content:
						"Al realizar una compra a través de la Aplicación, recopilamos información financiera necesaria para procesar el pago de los boletos, como detalles de tarjetas de crédito.",
				},
				{
					id: "1.3",
					title: "Información de Uso",
					content:
						"Recopilamos datos sobre su interacción con la Aplicación, incluyendo la búsqueda y reserva de boletos, historial de viajes y preferencias de usuario. También recopilamos información sobre su dispositivo, ubicación y dirección IP.",
				},
				{
					id: "1.4",
					title: "Información Adicional",
					content:
						"Podemos recopilar información adicional en encuestas, promociones u otras interacciones voluntarias con la Aplicación.",
				},
			],
		},
		{
			section: "2. Uso de la Información:",
			items: [
				{
					id: "2.1",
					title: "Procesamiento de Pagos",
					content:
						"Utilizamos la información de pago para procesar las transacciones realizadas a través de la Aplicación y garantizar la seguridad financiera de nuestros usuarios.",
				},
				{
					id: "2.2",
					title: "Mejora de Servicios",
					content:
						"Analizamos la información de uso para mejorar la funcionalidad de la Aplicación, personalizar la experiencia del usuario y ofrecer servicios y promociones relevantes.",
				},
				{
					id: "2.3",
					title: "Comunicaciones",
					content:
						"Podemos utilizar su información para enviarle comunicaciones relacionadas con su cuenta, transacciones y actualizaciones de la Aplicación. También podemos enviarle información sobre productos y servicios adicionales, sujeto a su consentimiento.",
				},
				{
					id: "2.4",
					title: "Publicidad Personalizada",
					content:
						"Podemos utilizar la información para mostrarle anuncios personalizados dentro de la Aplicación.",
				},
			],
		},
		{
			section: "3. Compartir Información:",
			items: [
				{
					id: "3.1",
					title: "Proveedores de Servicios",
					content:
						"Podemos compartir información con terceros proveedores de servicios que nos asisten en la operación de la Aplicación y en la prestación de servicios, como procesadores de pagos y servicios de análisis.",
				},
				{
					id: "3.2",
					title: "Proveedores de Transporte",
					content:
						"Compartimos la información necesaria con los proveedores de transporte para garantizar la emisión y validación de boletos de autobús.",
				},
				{
					id: "3.3",
					title: "Socios Comerciales",
					content:
						"En algunos casos, podemos compartir información con socios comerciales para ofrecer promociones conjuntas y mejorar la calidad de los servicios ofrecidos.",
				},
				{
					id: "3.4",
					title: "Requisitos Legales",
					content:
						"Nos reservamos el derecho de divulgar información cuando sea requerida por la ley, en respuesta a procesos legales o para proteger nuestros derechos legales.",
				},
			],
		},
		{
			section: "4. Seguridad de la Información:",
			items: [
				{
					id: "4.1",
					title: "Medidas de Seguridad",
					content:
						"Implementamos medidas de seguridad físicas, electrónicas y administrativas para proteger la información personal recopilada. Esto incluye encriptación de datos y acceso restringido a la información.",
				},
				{
					id: "4.2",
					title: "Colaboración con Proveedores",
					content:
						"Nos aseguramos de que nuestros proveedores de servicios cumplan con estándares de seguridad y protección de datos.",
				},
			],
		},
		{
			section: "5. Derechos del Usuario:",
			items: [
				{
					id: "5.1",
					title: "Acceso y Rectificación",
					content:
						"Usted tiene el derecho de acceder a su información personal y corregirla en caso de ser inexacta.",
				},
				{
					id: "5.2",
					title: "Cancelación y Oposición",
					content:
						"Puede solicitar la cancelación de su cuenta y oponerse al procesamiento de su información personal, sujeto a requisitos legales.",
				},
				{
					id: "5.3",
					title: "Consentimiento",
					content:
						"Al utilizar la Aplicación, usted otorga su consentimiento para el procesamiento de su información personal de acuerdo con este Aviso de Privacidad.",
				},
			],
		},
		{
			section: "6. Cambios en el Aviso de Privacidad:",
			items: [
				{
					id: "",
					title: "",
					content:
						"Nos reservamos el derecho de modificar este Aviso de Privacidad en cualquier momento. Los cambios significativos serán notificados a través de la Aplicación y, cuando sea necesario, solicitaremos su consentimiento.",
				},
			],
		},
		{
			section: "7. Contacto:",
			items: [
				{
					id: "",
					title: "",
					content:
						"Si tiene preguntas o inquietudes sobre este Aviso de Privacidad, póngase en contacto con nosotros a través de contacto@centralbus.mx",
				},
				{
					id: "",
					title: "",
					content:
						"Al utilizar la Aplicación, usted acepta los términos de este Aviso de Privacidad.",
				},
			],
		},
	];

	return (
		<div className='flex flex-col mx-[14%] gap-4 text-black text-lg'>
			<p>
				El presente Aviso de Privacidad se emite en cumplimiento a lo dispuesto por el artículo 15 de la Ley Federal de Protección de Datos Personales
				en Posesión de los Particulares en lo sucesivo "LA LEY", y sus correlativos del Reglamento de la Ley Federal de Protección de Datos Personales
				en Posesión de los Particulares en lo sucesivo "EL REGLAMENTO", y se pone a disposición de los usuarios que entreguen datos o información de
				carácter personal a Gorigeek S.A. de C.V. con número de registro de la empresa: 201700163437. establece los términos y condiciones bajo los cuales
				Gorigeek recopila, utiliza, almacena y protege la información personal de los usuarios de la aplicación móvil CentralBus ("la Aplicación").
				Al utilizar la aplicación, usted acepta expresamente los términos descritos en este Aviso de Privacidad.
			</p>
			{
				avisosDePrivacidad.map((item, index) => (
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

export default AvisoPrivacidadComponent;
