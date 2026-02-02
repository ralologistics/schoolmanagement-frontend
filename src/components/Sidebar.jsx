import { Link } from 'react-router-dom'

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navItems = [
    { name: 'Dashboard', icon: '📊', path: '/', active: true },
    { name: 'Section', icon: '📋', path: '/section', active: false },
    { name: 'Subject', icon: '📖', path: '/subject', active: false },
    { name: 'Assign Class Teacher', icon: '👩‍🏫', path: '/assign-class-teacher', active: false },
    { name: 'Class Routine', icon: '📅', path: '/class-routine-create', active: false },
    { name: 'Students', icon: '👨‍🎓', path: '/students', active: false },
    { name: 'Teachers', icon: '👩‍🏫', path: '/teachers', active: false },
    { name: 'Classes', icon: '📚', path: '/classes', active: false },
    { name: 'Attendance', icon: '✅', path: '/attendance', active: false },
    { name: 'Fees', icon: '💰', path: '/fees', active: false },
    { name: 'Reports', icon: '📈', path: '/reports', active: false },
    { name: 'Settings', icon: '⚙️', path: '/settings', active: false },
  ]

  return (
    <aside
      className={`${
        sidebarOpen ? 'w-64' : 'w-20'
      } bg-slate-800 text-white flex flex-col transition-all duration-300 ease-in-out shrink-0`}
    >
      {/* Logo */}
      <div className="p-4 border-b border-slate-700 flex items-center justify-between">
        {sidebarOpen ? (
          <h1 className="text-xl font-bold text-white">School Mgmt</h1>
        ) : null}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
        >
          {sidebarOpen ? '◀' : '▶'}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              item.active
                ? 'bg-slate-600 text-white'
                : 'text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <span className="text-xl shrink-0">{item.icon}</span>
            {sidebarOpen && <span className="font-medium">{item.name}</span>}
          </Link>
        ))}
      </nav>

      {/* User at bottom */}
      {sidebarOpen && (
        <div className="p-3 border-t border-slate-700">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-700/50">
            <div className="w-9 h-9 rounded-full bg-slate-600 flex items-center justify-center font-semibold">
              A
            </div>
            <div className="overflow-hidden">
              <p className="font-medium text-sm truncate">Admin</p>
              <p className="text-xs text-slate-400 truncate">admin@school.com</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}

export default Sidebar
