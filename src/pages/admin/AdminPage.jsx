import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AdminPanel, SkillsAdmin, ProjectsAdmin } from "../../components";
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

          <Route path="*" element={<Navigate to="/admin/home" />} />
        </Routes>
      )}
    </>
  );
};
