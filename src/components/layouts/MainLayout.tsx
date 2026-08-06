import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

import "./MainLayout.css";

export default function MainLayout() {
  return (
    <div className="main-layout">
        <div className="main-area">
            <Navbar/>

            <main className="page-content">
                <Outlet />
            </main>
        </div>

        <Sidebar />
    </div>
  );
}