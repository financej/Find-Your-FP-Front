import { useAuthStore } from '@/store'
import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedRoute() {

    const { token, isLogin } = useAuthStore()

    return token && isLogin ? <Outlet /> : <Navigate to="/login" replace />;
}