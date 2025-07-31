import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logoCB from '../../../assets/img/logoCB.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import logoFooter from '../../../assets/img/logoFooter.webp';
import facebookIcon from '../../../assets/img/footer/facebook.webp';
import instagramIcon from '../../../assets/img/footer/instagram.webp';
import tiktokIcon from '../../../assets/img/footer/tiktok.webp';
import whatsappIcon from '../../../assets/img/footer/whatsapp.webp';

export type CentralBusLayoutProps = {
	// types...
}

const CentralBusLayout: React.FC<CentralBusLayoutProps> = ({ }) => {

	const [menuOpen, setMenuOpen] = useState(false);

	const desktopLink = ({ isActive }: { isActive: boolean }) =>
		`px-3 py-2 hover:underline text-white ${isActive ? 'underline decoration-white underline-offset-10' : ''}`

	// Función helper para link móvil
	const mobileLink = ({ isActive }: { isActive: boolean }) =>
		`block px-4 py-3 hover:bg-[#244bd1] ${isActive ? 'underline decoration-white underline-offset-10' : ''
		}`

	return (
		<div className="flex flex-col min-h-screen overflow-x-hidden">
			{/* Navbar */}
			<header className="fixed w-full z-50 top-0 bg-[#2b5cf9] bg-opacity-100 shadow-md">
				<div className="flex items-center justify-between pl-6 pr-3 pb-3 pt-3">
					{/* Logo siempre visible */}
					<Link to="/" className="flex items-center">
						<img
							src={logoCB}
							alt="CentralBus Logo"
							className="h-16 w-12 inline-block mr-2"
						/>
					</Link>

					{/* Nav de escritorio (solo lg+) */}
					<nav className="hidden lg:flex space-x-24 font-aleo text-white mr-20">
						<NavLink to="/" className={desktopLink}>Inicio</NavLink>
						<NavLink to="/afiliate" className={desktopLink}>Afilia tu negocio</NavLink>
						<NavLink to="/acercaDe" className={desktopLink}>Conoce CentralBus</NavLink>
						<NavLink to="/franquicias" className={desktopLink}>Franquicias</NavLink>
					</nav>

					{/* Botón hamburguesa (solo < lg) */}
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className="lg:hidden text-white text-2xl focus:outline-none"
						aria-label="Menú"
					>
						<FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
					</button>
				</div>

				<AnimatePresence>
					{menuOpen && (
						<motion.nav
							key="menu-mobile"
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -10, opacity: 0 }}
							transition={{ duration: 0.25 }}
							className="lg:hidden bg-[#2b5cf9] text-white font-aleo"
						>
							<NavLink
								to="/"
								onClick={() => setMenuOpen(false)}
								className={mobileLink}>
								Inicio
							</NavLink>
							<NavLink
								to="/afiliate"
								onClick={() => setMenuOpen(false)}
								className={mobileLink}>
								Afilia tu negocio
							</NavLink>
							<NavLink
								to="/acercaDe"
								onClick={() => setMenuOpen(false)}
								className={mobileLink}>
								Conoce CentralBus
							</NavLink>
							<NavLink
								to="/franquicias"
								onClick={() => setMenuOpen(false)}
								className={mobileLink}>
								Franquicias
							</NavLink>
						</motion.nav>
					)}
				</AnimatePresence>
			</header>

			{/* Contenido */}
			<main className="flex-1 min-w-0">
				<div className="container mx-auto">
					<Outlet />
				</div>
			</main>

			{/* Footer */}
			<footer className="bg-[#2d92f7]">
				<div className="flex flex-col gap-10 py-4">
					<div className='grid lg:grid-cols-5 lg:justify-between lg:gap-0 gap-10 pt-8'>
						{/* Acerca de */}
						<div className='flex flex-col text-center gap-4'>
							<div>
								<p className='text-white font-aleo font-semibold text-xl'>
									SOBRE CENTRALBUS
								</p>
							</div>
							<div className='flex flex-col gap-1 font-semibold text-md'>
								<Link to={"/acerca_de"}>
									<p>
										¿Quiénes somos?
									</p>
								</Link>
								<Link to={"/acerca_de#objetivo"}>
									<p>
										Objetivo
									</p>
								</Link>
								<Link to={"/acerca_de#mision"}>
									<p>
										Mision
									</p>
								</Link>
								<Link to={"/acerca_de#valores"}>
									<p>
										Valores
									</p>
								</Link>
								<Link to={"/acerca_de#porque"}>
									<p>
										¿Por qué elegir CentralBus?
									</p>
								</Link>
							</div>
						</div>
						{/* Terminales */}
						<div className='flex flex-col text-center gap-4'>
							<div>
								<p className='text-white font-aleo font-semibold text-xl'>
									TERMINALES
								</p>
							</div>
							<div className='flex flex-col gap-1 font-semibold text-md'>
								<Link to={""}>
									<p>
										Plataforma digital de marketing y medio de pago
									</p>
								</Link>
								<Link to={""}>
									<p>
										Programa de recompensas
									</p>
								</Link>
							</div>
						</div>
						{/* Soporte */}
						<div className='flex flex-col text-center gap-4'>
							<div>
								<p className='text-white font-aleo font-semibold text-xl'>
									SOPORTE
								</p>
							</div>
							<div className='flex flex-col gap-1 font-semibold text-md'>
								<Link to={""}>
									<p>
										Centro de ayuda
									</p>
								</Link>
								<Link to={"/contacto"}>
									<p>
										Contáctanos
									</p>
								</Link>
							</div>
						</div>
						{/* legal */}
						<div className='flex flex-col text-center gap-4'>
							<div>
								<p className='text-white font-aleo font-semibold text-xl'>
									LEGAL
								</p>
							</div>
							<div className='flex flex-col gap-1 font-semibold text-md'>
								<Link to={"/terminos_condiciones"}>
									<p>
										Términos y condiciones
									</p>
								</Link>
								<Link to={"/aviso_privacidad"}>
									<p>
										Aviso de privacidad
									</p>
								</Link>
							</div>
						</div>
						{/* Redes sociales */}
						<div className='flex flex-col text-center gap-4'>
							<div>
								<p className='text-white font-aleo font-semibold text-md'>
									Formas de contacto
								</p>
							</div>
							<div className='flex flex-row gap-1 align-middle items-center justify-center font-semibold text-md'>
								<a href="https://www.tiktok.com/CentralBus" target="_blank" rel="noopener noreferrer">
									<img
										src={tiktokIcon}
										alt="CentralBus Tiktok"
										className="h-9 w-auto inline-block"
									/>
								</a>
								<a href="https://www.instagram.com/centralbus2020" target="_blank" rel="noopener noreferrer">
									<img
										src={instagramIcon}
										alt="CentralBus Tiktok"
										className="h-9 w-auto inline-block"
									/>
								</a>
								<a href="https://www.facebook.com/centralbus24" target="_blank" rel="noopener noreferrer">
									<img
										src={facebookIcon}
										alt="CentralBus Facebook"
										className="h-9 w-auto inline-block"
									/>
								</a>
								<a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
									<img
										src={whatsappIcon}
										alt="CentralBus Facebook"
										className="h-9 w-auto inline-block"
									/>
								</a>
							</div>
						</div>
					</div>
					<div>
						<img
							src={logoFooter}
							alt="CentralBus Logo"
							className="h-19 w-auto inline-block mr-2"
						/>
					</div>
					<div className='mx-10'>
						<p className='text-white font-aleo font-semibold lg:text-lg'>
							CentralBus | 2024 Viajar nunca ha sido tan fácil.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default CentralBusLayout;
