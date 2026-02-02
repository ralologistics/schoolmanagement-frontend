function IncomeExpensesCharts() {
  const metrics = [
    { label: 'Total Income', value: '($) 0' },
    { label: 'Total Expenses', value: '($) 626,768' },
    { label: 'Total Profit', value: '($) -626,768' },
    { label: 'Total Revenue', value: '($) 0' },
  ]

  const MetricBlock = () => (
    <div className="grid grid-cols-2 gap-3 mb-4">
      {metrics.map((m) => (
        <div key={m.label}>
          <p className="text-slate-500 text-xs font-medium">{m.label}</p>
          <p className="text-slate-800 font-semibold">{m.value}</p>
        </div>
      ))}
      <div className="col-span-2 flex items-center justify-between pt-2 border-t border-slate-100">
        <span className="text-slate-600 text-sm font-medium">Wallet Balance</span>
        <span className="text-slate-800 font-semibold">($) 0</span>
        <span className="flex gap-1">
          <span className="text-slate-400 cursor-pointer">▼</span>
          <span className="text-slate-400 cursor-pointer">✕</span>
        </span>
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* Income and Expenses for Feb 2026 - Bar chart */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Income and Expenses for Feb 2026</h3>
        <MetricBlock />
        <div className="h-40 flex items-end gap-2">
          <div className="flex-1 bg-pink-400/30 rounded-t" style={{ height: '60%' }} title="02 - Income: 0, Expense: 0" />
        </div>
        <p className="text-slate-400 text-xs mt-2">Bar chart placeholder</p>
      </div>

      {/* Income and Expenses for 2026 - Area chart */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Income and Expenses for 2026</h3>
        <MetricBlock />
        <div className="h-40 relative mt-4">
          <svg viewBox="0 0 200 80" className="w-full h-full">
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fill="url(#areaGradient)"
              d="M 0 80 L 0 80 L 100 20 L 200 10 L 200 80 Z"
            />
            <path fill="none" stroke="#ec4899" strokeWidth="2" d="M 0 80 L 100 20 L 200 10" />
          </svg>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-slate-500">
            <span>Jan</span>
            <span>Feb</span>
          </div>
        </div>
        <div className="flex justify-between text-xs text-slate-400 mt-1">
          <span>175,000</span>
          <span>350,000</span>
          <span>525,000</span>
          <span>700,000</span>
        </div>
      </div>
    </div>
  )
}

export default IncomeExpensesCharts
