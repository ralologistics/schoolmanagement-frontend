function StatsCards() {
  const stats = [
    { label: 'Total Students', value: '1,234', color: 'bg-blue-500', icon: '👨‍🎓' },
    { label: 'Total Teachers', value: '48', color: 'bg-emerald-500', icon: '👩‍🏫' },
    { label: 'Active Classes', value: '32', color: 'bg-amber-500', icon: '📚' },
    { label: 'Today Attendance', value: '94%', color: 'bg-violet-500', icon: '✅' },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
        >
          <div
            className={`w-14 h-14 rounded-xl ${stat.color} flex items-center justify-center text-2xl`}
          >
            {stat.icon}
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards
