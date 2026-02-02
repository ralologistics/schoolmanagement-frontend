const CLASS_ROWS = [
  { className: 'Class 1', section: 'A (5), B (5), C (5), D (5), E (5)', students: '25' },
  { className: 'Class 2', section: 'A (5), B (5), C (5), D (5), E (5)', students: '25' },
  { className: 'Class 3', section: 'A (5), B (5), C (5), D (5), E (5)', students: '25' },
  { className: 'Class 4', section: 'A (5), B (5), C (5), D (5), E (5)', students: '25' },
  { className: 'Class 5', section: 'A (5), B (5), C (5), D (5), E (5)', students: '25' },
]

function ClassListCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Class List</h3>

      <div className="overflow-x-auto border border-slate-200 rounded-lg">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-xs font-semibold text-slate-600 uppercase">CLASS</th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-600 uppercase">SECTION</th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-600 uppercase">STUDENTS</th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-600 uppercase">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {CLASS_ROWS.map((row, i) => (
              <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                <td className="px-4 py-3 text-slate-800 font-medium">{row.className}</td>
                <td className="px-4 py-3 text-slate-600 text-sm">{row.section}</td>
                <td className="px-4 py-3 text-slate-600">{row.students}</td>
                <td className="px-4 py-3">
                  <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-violet-600 text-violet-600 text-sm font-medium hover:bg-violet-50 transition-colors">
                    SELECT <span>↓</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ClassListCard
