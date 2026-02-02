import { Link } from 'react-router-dom'
import { AssignClassTeacherCard, ClassTeacherListCard } from '../components/assignClassTeacher'

function AssignClassTeacher() {
  return (
    <div className="p-6">
      {/* Breadcrumbs - top right */}
      <nav className="mb-6 flex justify-end">
        <ol className="flex items-center gap-2 text-sm text-slate-600">
          <li>
            <Link to="/" className="text-violet-600 hover:underline">Dashboard</Link>
          </li>
          <li className="text-slate-400">|</li>
          <li>
            <Link to="#" className="text-violet-600 hover:underline">Academics</Link>
          </li>
          <li className="text-slate-400">|</li>
          <li className="text-slate-800 font-medium">Assign Class Teacher</li>
        </ol>
      </nav>

      {/* Two column: Assign form (left ~35%) + Class Teacher List (right ~65%) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <AssignClassTeacherCard />
        </div>
        <div className="lg:col-span-2">
          <ClassTeacherListCard />
        </div>
      </div>
    </div>
  )
}

export default AssignClassTeacher
