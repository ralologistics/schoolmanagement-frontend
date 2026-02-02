import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Body from './Body'
import Students from './pages/Students'
import Teachers from './pages/Teachers'
import Classes from './pages/Classes'
import Attendance from './pages/Attendance'
import Fees from './pages/Fees'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import Section from './pages/Section'
import Subject from './pages/Subject'
import AssignClassTeacher from './pages/AssignClassTeacher'
import ClassRoutineCreate from './pages/ClassRoutineCreate'
import Timetable from './pages/Timetable'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Body />} />
        <Route path="dashboard" element={<Body />} />
        <Route path="section" element={<Section />} />
        <Route path="subject" element={<Subject />} />
        <Route path="assign-class-teacher" element={<AssignClassTeacher />} />
        <Route path="class-routine-create" element={<ClassRoutineCreate />} />
        <Route path="students" element={<Students />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="classes" element={<Classes />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="fees" element={<Fees />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="timetable" element={<Timetable />} />
      </Route>
    </Routes>
  )
}

export default App
