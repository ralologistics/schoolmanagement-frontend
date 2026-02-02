import { useState } from 'react'

const SECTIONS = ['A', 'B', 'C', 'D', 'E']

function AddClassCard() {
  const [name, setName] = useState('')
  const [section, setSection] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: API call to save class
    console.log('Save class:', { name, section })
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Add Class</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            NAME <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter class name"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-slate-800"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            SECTION <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            {SECTIONS.map((s) => (
              <label key={s} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="section"
                  value={s}
                  checked={section === s}
                  onChange={(e) => setSection(e.target.value)}
                  className="w-4 h-4 text-violet-600 border-slate-300 focus:ring-violet-500"
                />
                <span className="text-slate-700">{s}</span>
              </label>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2.5 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors flex items-center justify-center gap-2"
        >
          <span>✓</span>
          SAVE CLASS
        </button>
      </form>
    </div>
  )
}

export default AddClassCard
