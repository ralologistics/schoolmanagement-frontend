import { useState } from 'react'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const VIEWS = ['Month', 'Week', 'Day', 'List']

function CalendarSection() {
  const [currentView, setCurrentView] = useState('Month')
  const year = 2026
  const month = 'February'
  const daysInMonth = 28
  const firstDayOfMonth = 0 // Sunday = 0 for Feb 2026

  const emptyCells = Array(firstDayOfMonth).fill(null)
  const dateCells = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Calendar</h3>
      <div className="flex flex-wrap items-center gap-4 mb-4">
        {/* Left: nav + Today */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <button className="p-2 rounded hover:bg-slate-100 text-slate-600" title="First">«</button>
          <button className="p-2 rounded hover:bg-slate-100 text-slate-600" title="Previous">‹</button>
          <button className="p-2 rounded hover:bg-slate-100 text-slate-600" title="Next">›</button>
          <button className="p-2 rounded hover:bg-slate-100 text-slate-600" title="Last">»</button>
          <button className="px-3 py-1.5 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700">
            Today
          </button>
        </div>
        {/* Center: month/year */}
        <div className="flex-1 flex justify-center min-w-0">
          <span className="text-slate-700 font-semibold">{month} {year}</span>
        </div>
        {/* Right: view tabs */}
        <div className="flex items-center gap-1 flex-1 justify-end min-w-0 flex-wrap">
          {VIEWS.map((view) => (
            <button
              key={view}
              onClick={() => setCurrentView(view)}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                currentView === view ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {view}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {DAYS.map((day) => (
          <div key={day} className="text-center text-xs font-semibold text-slate-500 py-2">
            {day}
          </div>
        ))}
        {emptyCells.map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square" />
        ))}
        {dateCells.map((day) => (
          <div
            key={day}
            className={`aspect-square min-h-[80px] p-1 rounded-lg border text-sm ${
              day === 1
                ? 'bg-violet-600 border-violet-600 text-white'
                : 'border-slate-100 hover:bg-slate-50'
            }`}
          >
            <span className="font-medium">{day}</span>
            {day === 1 && (
              <div className="mt-1 text-xs space-y-0.5 overflow-hidden">
                <p className="truncate font-medium">Exam Schedule - First Te</p>
                <p className="text-violet-200">+1499 more</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarSection
