import { useState } from 'react'

function AddSectionCard() {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: API call to save section
    console.log('Save section:', name)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Add Section</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter section name"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-slate-800"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2.5 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors flex items-center justify-center gap-2"
        >
          <span>✓</span>
          SAVE SECTION
        </button>
      </form>
    </div>
  )
}

export default AddSectionCard
