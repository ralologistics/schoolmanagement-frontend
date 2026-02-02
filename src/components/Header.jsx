function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800">Dashboard</h2>
        <span className="text-slate-500 text-sm">Welcome back, Admin</span>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            className="w-64 pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <span className="text-xl">🔔</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile dropdown */}
        <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <div className="w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center text-sm font-semibold">
            A
          </div>
          <span className="text-slate-700 font-medium hidden md:block">Admin</span>
        </button>
      </div>
    </header>
  )
}

export default Header
