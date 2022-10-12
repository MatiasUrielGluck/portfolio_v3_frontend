import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, AdminPage } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
