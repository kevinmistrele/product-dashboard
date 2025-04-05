import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext.jsx";

export function PublicRoute({ children }) {
    const { user } = useAuth();

    if (user) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
}
