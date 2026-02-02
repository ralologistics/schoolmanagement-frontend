const SUBJECT_ROWS = [
  { sl: 1, subject: 'cupiditate', subjectType: 'Theory', subjectCode: 'aut' },
  { sl: 2, subject: 'recusandae', subjectType: 'Theory', subjectCode: 'molestiae' },
  { sl: 3, subject: 'voluptatem', subjectType: 'Theory', subjectCode: 'dolorem' },
  { sl: 4, subject: 'adipisci', subjectType: 'Practical', subjectCode: 'labore' },
  { sl: 5, subject: 'consectetur', subjectType: 'Theory', subjectCode: 'ipsum' },
  { sl: 6, subject: 'dignissimos', subjectType: 'Practical', subjectCode: 'sapiente' },
  { sl: 7, subject: 'Networking', subjectType: 'Theory', subjectCode: 'GK-123' },
  { sl: 8, subject: 'Mathematics', subjectType: 'Theory', subjectCode: 'MATH-101' },
  { sl: 9, subject: 'Physics', subjectType: 'Theory', subjectCode: 'PHY-102' },
  { sl: 10, subject: 'Bangla', subjectType: 'Theory', subjectCode: 'ENG-123' },
]

function SubjectListCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Subject List</h3>

      <div className="overflow-x-auto border border-slate-200 rounded-lg">
        <table className="w-full text-left">
          <thead className="bg-slate-100 border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-xs font-semibold text-slate-600 uppercase">SL</th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-600 uppercase">SUBJECT</th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-600 uppercase">SUBJECT TYPE</th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-600 uppercase">SUBJECT CODE</th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-600 uppercase">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {SUBJECT_ROWS.map((row, i) => (
              <tr
                key={row.sl}
                className={`border-b border-slate-100 last:border-0 hover:bg-slate-50 ${
                  i % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'
                }`}
              >
                <td className="px-4 py-3 text-slate-700">{row.sl}</td>
                <td className="px-4 py-3 text-slate-800 font-medium">{row.subject}</td>
                <td className="px-4 py-3 text-slate-600">{row.subjectType}</td>
                <td className="px-4 py-3 text-slate-600">{row.subjectCode}</td>
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

export default SubjectListCard
