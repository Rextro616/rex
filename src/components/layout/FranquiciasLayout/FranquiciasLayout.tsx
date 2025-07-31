import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import facebookIcon from "../../../assets/img/footer/facebook.webp";
import instagramIcon from "../../../assets/img/footer/instagram.webp";
import tiktokIcon from "../../../assets/img/footer/tiktok.webp";
import whatsappIcon from "../../../assets/img/footer/whatsapp.webp";
import accesosIcon from "../../../assets/img/franquicias/footer/accesos.png";
import legalIcon from "../../../assets/img/franquicias/footer/legal.png";
import beneficiosIcon from "../../../assets/img/franquicias/header/beneficios.png";
import plazasDisponiblesIcon from "../../../assets/img/franquicias/header/plazas-disponibles.png";
import logoCB from "../../../assets/img/logoCB.webp";

export type FranquiciasLayoutProps = {
  // types...
};

const FranquiciasLayout: React.FC<FranquiciasLayoutProps> = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const desktopLink = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 hover:underline text-white ${isActive ? "underline decoration-white underline-offset-10" : ""}`;

  // Función helper para link móvil
  const mobileLink = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-3 hover:bg-[#244bd1] ${
      isActive ? "underline decoration-white underline-offset-10" : ""
    }`;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-aleo">
      {/* Navbar propio de Franquicias */}
      <header className="fixed w-full z-50 top-0 bg-[var(--color-franquicias-primary)] text-white">
        <div className="mx-auto flex items-center justify-between p-4">
          <Link to="/" className="flex items-center px-10">
            <img
              src={logoCB}
              alt="CentralBus Logo"
              className="h-[64px] w-[50px] inline-block mr-2"
            />
          </Link>

          <div className="flex w-full lg:w-11/12 justify-between">
            <div className="bg-[var(--color-franquicias-secondary)] p-2 rounded justify-center h-[40px]">
              <Link
                to="/franquicias"
                className="px-4 py-4 text-center  text-dark"
              >
                Franquicias
              </Link>
            </div>

            <nav className="hidden lg:flex lg:ml-100">
              <Link to="/" className="px-8 py-2 hover:underline">
                ¿Porqué invertir?
              </Link>
              <Link to="/" className="px-8 py-2 hover:underline">
                <img
                  src={plazasDisponiblesIcon}
                  alt="Plazas disponibles"
                  className="h-8 w-8 inline-block mr-2"
                />
                Plazas disponibles
              </Link>
              <Link to="/" className="px-8 py-2 hover:underline">
                <img
                  src={beneficiosIcon}
                  alt="Beneficios"
                  className="h-8 w-8 inline-block mr-2"
                />
                Beneficios
              </Link>
            </nav>

            {/* Botón hamburguesa (solo < lg) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white text-2xl focus:outline-none"
              aria-label="Menú"
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>

            <Link
              to="/"
              className="mr-32 p-3 hover:bg-[var(--color-franquicias-secondary)] hover:rounded"
            >
              Únete ahora
            </Link>
          </div>
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
                className={mobileLink}
              >
                ¿Porqué invertir?
              </NavLink>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={mobileLink}
              >
                <img
                  src={plazasDisponiblesIcon}
                  alt="Plazas disponibles"
                  className="h-8 w-8 inline-block mr-2"
                />
                Plazas disponibles
              </NavLink>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={mobileLink}
              >
                <img
                  src={beneficiosIcon}
                  alt="Beneficios"
                  className="h-8 w-8 inline-block mr-2"
                />
                Beneficios
              </NavLink>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 container mx-auto p-8">
        <Outlet />
      </main>

      <footer className="bg-[var(--color-franquicias-tertiary)] text-white py-8 px-12 grid grid-cols-1 md:grid-cols-4">
        {/* accesos */}
        <div className="flex flex-col text-start gap-4 mt-10 items-center md:items-start">
          <img src={accesosIcon} className="w-[50px]" alt="Accesos" />
          <div>
            <p className="text-white  font-semibold text-base">Accesos</p>
          </div>
          <div className="flex flex-col gap-1 font-semibold text-md">
            <Link to={"/terminos_condiciones"}>
              <p>¿Qué es CentralBus?</p>
            </Link>
            <Link to={"/terminos_condiciones"}>
              <p>Beneficios</p>
            </Link>
            <Link to={"/aviso_privacidad"}>
              <p>Plazas Disponibles</p>
            </Link>
          </div>
        </div>

        {/* legal */}
        <div className="flex flex-col text-start gap-4 mt-10 items-center md:items-start">
          <img src={legalIcon} className="w-[50px]" alt="Legal" />
          <div>
            <p className="text-white  font-semibold text-base">Legal</p>
          </div>
          <div className="flex flex-col gap-1 font-semibold text-md">
            <Link to={"/terminos_condiciones"}>
              <p>Términos de uso</p>
            </Link>
            <Link to={"/terminos_condiciones"}>
              <p>Términos y condiciones</p>
            </Link>
            <Link to={"/aviso_privacidad"}>
              <p>Politicas de privacidad</p>
            </Link>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="order-3 md:order-none md:col-start-4 mt-10 flex flex-col items-center gap-4">
          {/* Título */}
          <p className="text-white font-semibold text-base">
            Formas de contacto
          </p>

          <div className="flex items-center gap-2">
            <a
              href="https://www.tiktok.com/CentralBus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={tiktokIcon}
                alt="CentralBus Tiktok"
                className="h-9 w-auto inline-block"
              />
            </a>
            <a
              href="https://www.instagram.com/centralbus2020"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="CentralBus Tiktok"
                className="h-9 w-auto inline-block"
              />
            </a>
            <a
              href="https://www.facebook.com/centralbus24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookIcon}
                alt="CentralBus Facebook"
                className="h-9 w-auto inline-block"
              />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsappIcon}
                alt="CentralBus Facebook"
                className="h-9 w-auto inline-block"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FranquiciasLayout;
