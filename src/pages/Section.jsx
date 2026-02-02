import { Link } from 'react-router-dom'
import { AddSectionCard, SectionListCard } from '../components/section'

function Section() {
  return (
    <div className="p-6">
      {/* Breadcrumbs - top right area */}
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
          <li className="text-slate-800 font-medium">Section</li>
        </ol>
      </nav>

      {/* Two column: Add Section (left) + Section List (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <AddSectionCard />
        </div>
        <div className="lg:col-span-2">
          <SectionListCard />
        </div>
      </div>
    </div>
  )
}

export default Section
