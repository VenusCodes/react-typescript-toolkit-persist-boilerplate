import { useAppSelector } from "../../hooks/store"
import { Navigate, Outlet } from 'react-router-dom'
import { APP_ROUTES } from "../../routes/routeConfig"
import Layout from "../layout/Layout"


const AuthLayout = () => {
    const token = useAppSelector((store) => store.auth.token)
    console.log('token', token)

    return (
        <>
            {token ? <Layout><Outlet /></Layout> : <Navigate to={APP_ROUTES.login} />}
        </>
    )
}

export default AuthLayout