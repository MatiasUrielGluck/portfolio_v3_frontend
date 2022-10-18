import { Navigate, Route, Routes } from "react-router-dom";
import { SkillsAdmin } from "../components";
import { HomePage, LoginPage, AdminPage } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="admin/*" element={<AdminPage />}>
        <Route path="skills" element={<SkillsAdmin />} />

        <Route path="*" element={<Navigate to="home" />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
