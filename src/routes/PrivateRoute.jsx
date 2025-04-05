import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext.jsx";

export function PrivateRoute({ children }) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
