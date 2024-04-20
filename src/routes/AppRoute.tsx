import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { APP_ROUTES } from './routeConfig'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import ForgetPassword from '../pages/forget-password/ForgetPassword'
import ResetPassword from '../pages/reset-password/ResetPassword'
import AuthLayout from '../components/auth-layout/AuthLayout'
import NotFound from '../pages/404/NotFound'
import Analytics from '../pages/dashboard/analytics/Analytics'
import Appearance from '../pages/settings/appearance/Appearance'
import Profile from '../pages/settings/profile/Profile'

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path={APP_ROUTES.login} element={<Login />} />
                <Route path={APP_ROUTES.signup} element={<Signup />} />
                <Route path={APP_ROUTES.forgetPassword} element={<ForgetPassword />} />
                <Route path={APP_ROUTES.resetPassword} element={<ResetPassword />} />

                {/* Private Routes */}
                <Route element={<AuthLayout />}>
                    <Route path={APP_ROUTES.dashboard.base}>
                        <Route path={APP_ROUTES.dashboard.analytics} element={<Analytics />} />
                    </Route>

                    <Route path={APP_ROUTES.settings.base}>
                        <Route path={APP_ROUTES.settings.appearance} element={<Appearance />} />
                        <Route path={APP_ROUTES.settings.profile} element={<Profile />} />
                    </Route>
                </Route>

                <Route path='*' element={<NotFound />} />
            </Routes >
        </BrowserRouter >
    )
}

export default AppRoute