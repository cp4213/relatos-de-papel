import { BrowserRouter, Route } from "react-router-dom";
import { AppRoutes } from "./routes/appRoutes";
import PublicLayout from "./layouts/PublicLayout";
import RoutesWithNotFound from "./routes/RoutesWithNotFound";
import CatalogPage from "./pages/catalog/CatalogPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path={AppRoutes.home} element={<PublicLayout />}>
                    <Route path={AppRoutes.home} element={<CatalogPage />} />
                </Route>
            </RoutesWithNotFound>
        </BrowserRouter>
    )
}