import { Navigate, Outlet, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
export default function ProtectedRoute({ allowedRoles }) {
    const location = useLocation();
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
            localStorage.removeItem('token');
            return <Navigate to="/login" state={{ from: location }} replace />;
        }

        // Check if the user's role is in the allowed roles
        if (allowedRoles && !allowedRoles.includes(decodedToken.role)) {
            return <Navigate to="/unauthorized" state={{ from: location }} replace />;
        }

        return <Outlet />;

    } catch (err) {
        console.error("Token decoding failed:", err);
        localStorage.removeItem('token');
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
}
