import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  AdminPanel,
  SkillsAdmin,
  ProjectsAdmin,
  EducationAdmin,
  Order,
} from "../../components";
import { useAuth } from "../../hooks";

export const AdminPage = () => {
  useAuth();
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <>
      {!authenticated ? (
        <div>
          <Navigate to="/login" />
        </div>
      ) : (
        <Routes>
          <Route path="home" element={<AdminPanel />} />
          <Route path="skills" element={<SkillsAdmin />} />
          <Route path="projects" element={<ProjectsAdmin />} />
          <Route path="education" element={<EducationAdmin />} />
          <Route path="order" element={<Order />} />

          <Route path="*" element={<Navigate to="/admin/home" />} />
        </Routes>
      )}
    </>
  );
};
