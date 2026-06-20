import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Auth from "../ui/pages/Auth/Auth";

import MainLayout from "../ui/layouts/MainLayout";

import Home from "../ui/pages/Home/Home"
import Play from "../ui/pages/Play/Play"
import Profile from "../ui/pages/Profile/Profile"
import Store from "../ui/pages/Store/Store"

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
          <Route path="/Play" element={<Play />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}