import { Link } from 'react-router-dom'
import { SelectCriteriaCard, ClassRoutineCreateCard } from '../components/classRoutine'

function ClassRoutineCreate() {
  return (
    <div className="p-6">
      {/* Header: left = title, right = breadcrumbs + cart */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Class Routine Create</h1>
        <div className="flex items-center gap-3">
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
              <li className="text-slate-800 font-medium">Class Routine Create</li>
            </ol>
          </nav>
          <button className="p-2 rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-colors shrink-0" title="Cart">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </button>
        </div>
      </div>

      <SelectCriteriaCard />
      <ClassRoutineCreateCard />
    </div>
  )
}

export default ClassRoutineCreate
