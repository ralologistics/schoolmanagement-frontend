import { useState } from 'react'

const SECTIONS = ['A', 'B', 'C', 'D', 'E']

function SectionListCard() {
  const [search, setSearch] = useState('')
  const [currentPage] = useState(1)
  const totalEntries = SECTIONS.length

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <h3 className="text-lg font-bold text-slate-800">Section List</h3>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="SEARCH"
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 w-40"
            />
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg border border-violet-600 text-violet-600 hover:bg-violet-50 transition-colors" title="Copy">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </button>
            <button className="p-2 rounded-lg border border-violet-600 text-violet-600 hover:bg-violet-50 transition-colors" title="Excel">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </button>
            <button className="p-2 rounded-lg border border-violet-600 text-violet-600 hover:bg-violet-50 transition-colors" title="CSV">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            </button>
            <button className="p-2 rounded-lg border border-violet-600 text-violet-600 hover:bg-violet-50 transition-colors" title="PDF">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </button>
            <button className="p-2 rounded-lg border border-violet-600 text-violet-600 hover:bg-violet-50 transition-colors" title="Print">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
            </button>
            <button className="p-2 rounded-lg border border-violet-600 text-violet-600 hover:bg-violet-50 transition-colors" title="Columns">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto border border-slate-200 rounded-lg">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-xs font-semibold text-slate-600 uppercase">
                <span className="inline-flex items-center gap-1">↓ Section</span>
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-600 uppercase">
                <span className="inline-flex items-center gap-1">↓ Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {SECTIONS.map((section) => (
              <tr key={section} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                <td className="px-4 py-3 text-slate-800 font-medium">{section}</td>
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

      <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-4 border-t border-slate-200">
        <p className="text-sm text-slate-500">
          Showing 1 to {totalEntries} of {totalEntries} entries
        </p>
        <div className="flex items-center gap-1">
          <button className="p-2 rounded border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50" disabled title="Previous">
            ←
          </button>
          <button className="min-w-[2rem] px-2 py-1 rounded bg-violet-600 text-white text-sm font-medium">
            1
          </button>
          <button className="p-2 rounded border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50" disabled title="Next">
            →
          </button>
        </div>
      </div>
    </div>
  )
}

export default SectionListCard
