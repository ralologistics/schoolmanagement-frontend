import { Link } from 'react-router-dom'
import { AddClassCard, ClassListCard } from '../components/class'

function Classes() {
  return (
    <div className="p-6">
      {/* Header: left = title, right = breadcrumbs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Class</h1>
        <nav>
          <ol className="flex items-center gap-2 text-sm text-slate-600">
            <li>
              <Link to="/" className="text-violet-600 hover:underline">Dashboard</Link>
            </li>
            <li className="text-slate-400">|</li>
            <li>
              <Link to="#" className="text-violet-600 hover:underline">Academics</Link>
            </li>
            <li className="text-slate-400">|</li>
            <li className="text-slate-800 font-medium">Class</li>
          </ol>
        </nav>
      </div>

      {/* Two column: Add Class (left) + Class List (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <AddClassCard />
        </div>
        <div className="lg:col-span-2">
          <ClassListCard />
        </div>
      </div>
    </div>
  )
}

export default Classes
