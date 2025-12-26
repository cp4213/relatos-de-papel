import { Outlet } from "react-router-dom";
import Topbar from "../components/shared/Layout/Topbar";
import Sidebar from "../components/shared/Layout/Sidebar";

export default function PublicLayout() {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1">
                <Topbar />
                <main className="p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}