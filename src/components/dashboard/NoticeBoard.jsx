function NoticeBoard() {
  const notices = [
    { date: '12th Dec, 2023', title: 'A Meeting Between Teachers and Parents to Discuss Academic Objectives and Collaborative Goals' },
    { date: '12th Dec, 2023', title: 'Celebrate National Day with Us: Join the Festivities at Infix School on December 16th' },
    { date: '12th Dec, 2023', title: 'Infix School Hosts an Innovative ICT Training Program for Teachers and Students During ICT Week 2024' },
    { date: '12th Dec, 2023', title: 'Infix School Affirms the Importance of Proper Uniform Compliance for All Students on Campus' },
    { date: '12th Dec, 2023', title: 'Infix EDU School Enhances Campus Safety and Security Measures for Students and Staff' },
    { date: '12th Dec, 2023', title: 'Announcement: Winter Vacation 2024 Scheduled from December 16 to December 27' },
    { date: '12th Dec, 2023', title: 'An Invitation to Our Students and Esteemed Parents: We Welcome Your Valuable Feedback and Suggestions' },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-800">Notice Board</h3>
        <button className="px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-colors">
          + ADD
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="pb-3 text-xs font-semibold text-slate-500 uppercase">DATE</th>
              <th className="pb-3 text-xs font-semibold text-slate-500 uppercase">TITLE</th>
              <th className="pb-3 text-xs font-semibold text-slate-500 uppercase text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice, i) => (
              <tr key={i} className="border-b border-slate-100 last:border-0">
                <td className="py-3 text-sm text-slate-600 whitespace-nowrap">{notice.date}</td>
                <td className="py-3 text-sm text-slate-700">{notice.title}</td>
                <td className="py-3 text-right">
                  <button className="text-slate-500 hover:text-violet-600 transition-colors" title="View">
                    <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
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

export default NoticeBoard
