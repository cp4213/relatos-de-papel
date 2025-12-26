import AppRouter from "./AppRouter";
import { AuthProvider } from "./context/AuthContext";

function AppHookContainer() {
    return (
        <AuthProvider>
                <AppRouter />
        </AuthProvider>
    )
}

export default AppHookContainer;