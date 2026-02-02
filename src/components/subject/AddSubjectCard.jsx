import { useState } from 'react'

const SUBJECT_TYPES = ['Theory', 'Practical']

function AddSubjectCard() {
  const [subjectName, setSubjectName] = useState('')
  const [subjectType, setSubjectType] = useState('Theory')
  const [subjectCode, setSubjectCode] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: API call to save subject
    console.log('Save subject:', { subjectName, subjectType, subjectCode })
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Add Subject</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1 uppercase">
            SUBJECT NAME <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            placeholder="Enter subject name"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-slate-800"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2 uppercase">
            SUBJECT TYPE
          </label>
          <div className="flex gap-6">
            {SUBJECT_TYPES.map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="subjectType"
                  value={type}
                  checked={subjectType === type}
                  onChange={(e) => setSubjectType(e.target.value)}
                  className="w-4 h-4 text-violet-600 border-slate-300 focus:ring-violet-500"
                />
                <span className="text-slate-700">{type}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1 uppercase">
            SUBJECT CODE <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}
            placeholder="Enter subject code"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-slate-800"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2.5 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors flex items-center justify-center gap-2 uppercase"
        >
          <span>✓</span>
          SAVE SUBJECT
        </button>
      </form>
    </div>
  )
}

export default AddSubjectCard
