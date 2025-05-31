import { Outlet, Navigate } from "react-router-dom"
import { useAppSelector } from "../store/store"

const ProtectedRoutes = () => {
 const user = useAppSelector(state => state.auth.isAuthenticated)
 return user ? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRoutes;