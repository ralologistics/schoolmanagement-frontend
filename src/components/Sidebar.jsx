import { Link, useLocation } from 'react-router-dom'

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation()
  const navItems = [
    { name: 'Dashboard', icon: '📊', path: '/' },
    { name: 'Section', icon: '📋', path: '/section' },
    { name: 'Subject', icon: '📖', path: '/subject' },
    { name: 'Assign Class Teacher', icon: '👩‍🏫', path: '/assign-class-teacher' },
    { name: 'Class Routine', icon: '📅', path: '/class-routine-create' },
    { name: 'Students', icon: '👨‍🎓', path: '/students' },
    { name: 'Parent Portal', icon: '👪', path: '/parent-portal' },
    { name: 'Teachers', icon: '👩‍🏫', path: '/teachers' },
    { name: 'Notifications', icon: '🔔', path: '/notifications' },
    { name: 'Classes', icon: '📚', path: '/classes' },
    { name: 'Attendance', icon: '✅', path: '/attendance' },
    { name: 'Timetable', icon: '📅', path: '/timetable' },

    { name: 'Inventory', icon: '📦', path: '/inventory' },
    { name: 'Transport', icon: '💼', path: '/transport' },
    { name: 'Fees', icon: '💰', path: '/fees' },
    { name: 'Accounting & Finance', icon: '💼', path: '/accounting' },
    { name: 'Library', icon: '📚', path: '/library' },
    { name: 'Calendar', icon: '📅', path: '/calendar' },
    { name: 'Notice', icon: '📚', path: '/notices' },
    { name: 'Gallery', icon: '🖼️', path: '/gallery' },
    { name: 'Reports', icon: '📈', path: '/reports' },
    { name: 'Settings', icon: '⚙️', path: '/settings' },
  ]

  return (
    <aside
      className={`${sidebarOpen ? 'w-64' : 'w-20'
        } bg-slate-800 text-white flex flex-col transition-all duration-300 ease-in-out shrink-0`}
    >
      {/* Logo */}
      <div className="p-4 border-b border-slate-700 flex items-center justify-between">
        {sidebarOpen ? (
          <h1 className="text-xl font-bold text-white">School Mgmt</h1>
        ) : null}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-slate-700 bg-slate-400 transition-colors"
        >
          {sidebarOpen ? '◀' : '▶'}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${isActive
                ? 'bg-slate-600 text-white'
                : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
            >
              <span className="text-xl shrink-0">{item.icon}</span>
              {sidebarOpen && <span className="font-medium">{item.name}</span>}
            </Link>
          )
        })}
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
