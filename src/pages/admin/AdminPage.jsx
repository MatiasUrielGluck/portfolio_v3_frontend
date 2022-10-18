import { Navigate, Route, Routes } from "react-router-dom"
import { AdminPanel, SkillsContainer } from "../../components"

export const AdminPage = () => {
  return (
    <Routes>
      <Route path="home" element={<AdminPanel />}/>
      <Route path="skills" element={<SkillsContainer />}/>

      <Route path="*" element={<Navigate to="/admin/home"/>}/>
    </Routes>
  )
}
