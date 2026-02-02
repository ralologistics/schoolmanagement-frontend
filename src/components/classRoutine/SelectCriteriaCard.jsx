import { useState } from 'react'

function SelectCriteriaCard() {
  const [selectedClass, setSelectedClass] = useState('3')
  const [selectedSection, setSelectedSection] = useState('D')

  const handleSearch = (e) => {
    e.preventDefault()
    // TODO: fetch routine by class & section
    console.log('Search:', { selectedClass, selectedSection })
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Select Criteria</h3>
      <form onSubmit={handleSearch} className="flex flex-wrap items-end gap-4">
        <div className="flex-1 min-w-[140px]">
          <label className="block text-sm font-medium text-slate-700 mb-1 uppercase">
            CLASS <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-4 py-2.5 pr-8 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white appearance-none cursor-pointer text-slate-800"
              required
            >
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">▼</span>
          </div>
        </div>
        <div className="flex-1 min-w-[140px]">
          <label className="block text-sm font-medium text-slate-700 mb-1 uppercase">
            SECTION <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="w-full px-4 py-2.5 pr-8 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white appearance-none cursor-pointer text-slate-800"
              required
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">▼</span>
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors uppercase text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          SEARCH
        </button>
      </form>
    </div>
  )
}

export default SelectCriteriaCard
