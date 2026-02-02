import { useState } from 'react'

const TEACHERS = [
  'Rolando', 'Jean', 'Noble', 'Claude', 'Roy', 'Jaylon', 'Mr. Olivia', 'Mr. Ahmed', 'Mr. Patel',
  'Reid', 'Domenico', 'Lamont', 'Pablo', 'General', 'Jedidiah', 'Robert', 'Raphael', 'Carter',
  'Brody', 'Darien', 'Derek', 'Wayne', 'Kaley', 'Chauncey', 'Elian', 'Gay', 'Jasen', 'Zack',
  'Larry', 'Isai', 'Tito', 'Gerard', 'Burley', 'Jaeden',
]

function AssignClassTeacherCard() {
  const [selectedClass, setSelectedClass] = useState('')
  const [selectedSection, setSelectedSection] = useState('')
  const [selectedTeacher, setSelectedTeacher] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: API call to save assign class teacher
    console.log('Save:', { selectedClass, selectedSection, selectedTeacher })
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Assign Class Teacher</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1 uppercase">
            CLASS <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-4 py-2.5 pr-8 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-slate-800 bg-white appearance-none cursor-pointer"
              required
            >
              <option value="">Select Class *</option>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">▼</span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1 uppercase">
            SECTION <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="w-full px-4 py-2.5 pr-8 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-slate-800 bg-white appearance-none cursor-pointer"
              required
            >
              <option value="">Select Section *</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">▼</span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2 uppercase">
            TEACHER <span className="text-red-500">*</span>
          </label>
          <div className="max-h-64 overflow-y-auto space-y-2 pr-1 border border-slate-200 rounded-lg p-3 bg-slate-50/50">
            {TEACHERS.map((name) => (
              <label key={name} className="flex items-center gap-2 cursor-pointer hover:bg-slate-100 rounded px-2 py-1">
                <input
                  type="radio"
                  name="teacher"
                  value={name}
                  checked={selectedTeacher === name}
                  onChange={(e) => setSelectedTeacher(e.target.value)}
                  className="w-4 h-4 text-violet-600 border-slate-300 focus:ring-violet-500"
                />
                <span className="text-slate-700 text-sm">{name}</span>
              </label>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2.5 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors flex items-center justify-center gap-2 uppercase shadow-sm"
        >
          <span>✓</span>
          SAVE CLASS TEACHER
        </button>
      </form>
    </div>
  )
}

export default AssignClassTeacherCard
