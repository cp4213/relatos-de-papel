import { Outlet } from "react-router-dom";
import Topbar from "../components/shared/Layout/Topbar";
import Sidebar from "../components/shared/Layout/Sidebar";

export default function PublicLayout() {
    return (
        <div className="d-flex h-100">
            <Sidebar />
            <div className="flex-grow-1 d-flex flex-column h-100">
                <Topbar />
                <main className="p-4 bg-body-tertiary flex-grow-1 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}