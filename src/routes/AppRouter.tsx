import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Auth from "../pages/Auth/Auth";

import MainLayout from "../components/layouts/MainLayout";

import Home from "../pages/Home/Home"
import Play from "../pages/Play/Play"
import Profile from "../pages/Profile/Profile"
import Store from "../pages/Store/Store"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth */}
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />

        {/* Main App */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/play" element={<Play />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}