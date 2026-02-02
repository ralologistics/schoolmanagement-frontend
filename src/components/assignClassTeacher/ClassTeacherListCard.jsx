import { useState } from 'react'

function ClassTeacherListCard() {
  const [search, setSearch] = useState('')

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <h3 className="text-lg font-bold text-slate-800">Class Teacher List</h3>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="relative flex-1 min-w-[120px] max-w-[180px]">
            <span className="absolute left-0 bottom-0 text-slate-400 pointer-events-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="SEARCH"
              className="w-full pl-6 pr-2 py-2 border-0 border-b border-slate-200 rounded-none bg-transparent text-sm focus:outline-none focus:ring-0 focus:border-violet-500"
            />
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors" title="Copy">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </button>
            <button className="p-2 rounded border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors" title="Excel">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </button>
            <button className="p-2 rounded border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors" title="CSV">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            </button>
            <button className="p-2 rounded border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors" title="PDF">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </button>
            <button className="p-2 rounded border border-slate-200 text-slate-600 hover:bg-violet-50 hover:border-violet-300 transition-colors" title="Print">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
            </button>
            <button className="p-2 rounded border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors" title="Columns">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </button>
          </div>
          <button className="p-2 rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-colors" title="Cart">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto border border-slate-200 rounded-lg">
        <table className="w-full text-left">
          <thead className="bg-blue-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-xs font-semibold text-slate-700 uppercase">
                <span className="inline-flex items-center gap-1">↓ Class</span>
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-700 uppercase">
                <span className="inline-flex items-center gap-1">↓ Section</span>
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-700 uppercase">
                <span className="inline-flex items-center gap-1">↓ Teacher</span>
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-700 uppercase">
                <span className="inline-flex items-center gap-1">↓ Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} className="px-4 py-16 text-center text-slate-500">
                No Data Available In Table
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-4 border-t border-slate-200">
        <p className="text-sm text-slate-500">
          Showing 0 to 0 of 0 entries
        </p>
        <div className="flex items-center gap-1">
          <button className="p-2 text-slate-500 hover:text-slate-700 disabled:opacity-50" disabled title="Previous">
            ←
          </button>
          <button className="p-2 text-slate-500 hover:text-slate-700 disabled:opacity-50" disabled title="Next">
            →
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClassTeacherListCard
