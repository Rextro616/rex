import { Navigate, Route, Routes } from "react-router-dom"
import { CentralBusLayout } from "../components/layout/CentralBusLayout"
import { FranquiciasLayout } from "../components/layout/FranquiciasLayout"
import { HomeScreen } from "../screens/HomeScreen"
import { ConoceCBScreen } from "../screens/ConoceCBScreen"
import { AfiliaNegocioScreen } from "../screens/AfiliaNegocioScreen"

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<CentralBusLayout/>}>
                <Route index element={<HomeScreen/>}/>
                <Route path="acerca_de" element={<ConoceCBScreen/>}/>
                <Route path="afiliate" element={<AfiliaNegocioScreen/>}/>
            </Route>

            <Route path="franquicias" element={<FranquiciasLayout/>}>

            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}
