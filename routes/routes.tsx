import { Navigate, Route, Routes } from "react-router-dom"
import { CentralBusLayout } from "@/components/layout/CentralBusLayout"
import { FranquiciasLayout } from "@/components/layout/FranquiciasLayout"
import { HomeScreen } from "@/screens/HomeScreen"
import { ConoceCBScreen } from "@/screens/ConoceCBScreen"
import { AfiliaNegocioScreen } from "@/screens/AfiliaNegocioScreen"
import { customHook } from "@/hooks/global.hooks"
import { LegalScreen } from "@/screens/LegalScreen"
import { DescargaAppScreen } from "@/screens/DescargaAppScreen"
import { ContactoScreen } from "@/screens/ContactoScreen"

export const AppRouter = () => {

    customHook();

    return (
        <Routes>
            <Route element={<CentralBusLayout />}>
                <Route index element={<HomeScreen />} />
                <Route path="acerca_de" element={<ConoceCBScreen />} />
                <Route path="afiliate" element={<AfiliaNegocioScreen />} />
                <Route path="terminos_condiciones" element={<LegalScreen/>}/>
                <Route path="aviso_privacidad" element={<LegalScreen/>}/>
                <Route path="contacto" element={<ContactoScreen/>}/>
            </Route>
            <Route path="download" element={<DescargaAppScreen/>}/>
            <Route path="franquicias" element={<FranquiciasLayout />}>

            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}
