import { useState } from 'react'

const DAYS = ['SATURDAY', 'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY']
const SUBJECTS = ['Bangla', 'Math', 'Algorithm', 'Networking', 'chemistry', 'inventore', 'in', 'quos', 'recusandae', 'cupiditate']
const TEACHERS = ['Wayne', 'Lamont', 'Domenico', 'Jean', 'Rolando', 'Kaley', 'Mr. Ahmed', 'Mr. Patel']

const defaultRow = () => ({
  subject: '',
  teacher: '',
  startTime: '9:00 AM',
  endTime: '9:45 AM',
  isBreak: false,
  room: '',
})

function ClassRoutineCreateCard() {
  const [activeDay, setActiveDay] = useState('SATURDAY')
  const [rows, setRows] = useState([defaultRow(), defaultRow(), defaultRow(), defaultRow(), defaultRow(), defaultRow(), defaultRow(), defaultRow(), defaultRow(), defaultRow()])

  const addRow = () => setRows((r) => [...r, defaultRow()])
  const removeRow = (i) => setRows((r) => r.filter((_, idx) => idx !== i))
  const updateRow = (i, field, value) => {
    setRows((r) => r.map((row, idx) => (idx === i ? { ...row, [field]: value } : row)))
  }

  const handleSave = (e) => {
    e.preventDefault()
    console.log('Save routine:', { activeDay, rows })
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <h3 className="text-lg font-bold text-slate-800">Class Routine Create</h3>
        <div className="flex items-center gap-2">
          <button type="button" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 uppercase">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
            PRINT
          </button>
          <button type="button" onClick={addRow} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 uppercase">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            ADD
          </button>
        </div>
      </div>

      {/* Day tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {DAYS.map((day) => (
          <button
            key={day}
            type="button"
            onClick={() => setActiveDay(day)}
            className={`px-3 py-2 rounded text-sm font-medium uppercase transition-colors ${
              activeDay === day
                ? 'bg-white border border-slate-300 text-slate-800 shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-transparent'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Routine table */}
      <div className="overflow-x-auto border border-slate-200 rounded-lg mb-6">
        <table className="w-full text-left min-w-[900px]">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-3 py-2 text-xs font-semibold text-slate-600 uppercase whitespace-nowrap">SUBJECT</th>
              <th className="px-3 py-2 text-xs font-semibold text-slate-600 uppercase whitespace-nowrap">TEACHER</th>
              <th className="px-3 py-2 text-xs font-semibold text-slate-600 uppercase whitespace-nowrap">START TIME</th>
              <th className="px-3 py-2 text-xs font-semibold text-slate-600 uppercase whitespace-nowrap">END TIME</th>
              <th className="px-3 py-2 text-xs font-semibold text-slate-600 uppercase whitespace-nowrap">IS BREAK</th>
              <th className="px-3 py-2 text-xs font-semibold text-slate-600 uppercase whitespace-nowrap">OTHER DAY</th>
              <th className="px-3 py-2 text-xs font-semibold text-slate-600 uppercase whitespace-nowrap">CLASS ROOM</th>
              <th className="px-3 py-2 text-xs font-semibold text-slate-600 uppercase whitespace-nowrap">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                <td className="px-3 py-2">
                  <select
                    value={row.subject}
                    onChange={(e) => updateRow(i, 'subject', e.target.value)}
                    className="w-full min-w-[100px] px-2 py-1.5 border border-slate-200 rounded text-sm bg-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </td>
                <td className="px-3 py-2">
                  <select
                    value={row.teacher}
                    onChange={(e) => updateRow(i, 'teacher', e.target.value)}
                    className="w-full min-w-[90px] px-2 py-1.5 border border-slate-200 rounded text-sm bg-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    {TEACHERS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </td>
                <td className="px-3 py-2">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={row.startTime}
                      onChange={(e) => updateRow(i, 'startTime', e.target.value)}
                      className="w-full min-w-[90px] pl-8 pr-2 py-1.5 border border-slate-200 rounded text-sm focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                    <span className="absolute left-2 text-slate-400 pointer-events-none">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={row.endTime}
                      onChange={(e) => updateRow(i, 'endTime', e.target.value)}
                      className="w-full min-w-[90px] pl-8 pr-2 py-1.5 border border-slate-200 rounded text-sm focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                    <span className="absolute left-2 text-slate-400 pointer-events-none">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2">
                  <input
                    type="radio"
                    name={`break-${i}`}
                    checked={row.isBreak}
                    onChange={() => updateRow(i, 'isBreak', !row.isBreak)}
                    className="w-4 h-4 text-violet-600 border-slate-300 focus:ring-violet-500"
                  />
                </td>
                <td className="px-3 py-2">
                  <button type="button" className="p-2 rounded border border-slate-200 text-slate-500 hover:bg-slate-50" title="Other Day">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </button>
                </td>
                <td className="px-3 py-2">
                  <select
                    value={row.room}
                    onChange={(e) => updateRow(i, 'room', e.target.value)}
                    className="w-full min-w-[100px] px-2 py-1.5 border border-slate-200 rounded text-sm bg-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  >
                    <option value="">Select Ro...</option>
                    <option value="R1">Room 1</option>
                    <option value="R2">Room 2</option>
                    <option value="R3">Room 3</option>
                  </select>
                </td>
                <td className="px-3 py-2">
                  <button
                    type="button"
                    onClick={() => removeRow(i)}
                    className="p-2 rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-colors"
                    title="Delete"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-8 py-2.5 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors uppercase"
        >
          <span>✓</span>
          SAVE
        </button>
      </div>
    </div>
  )
}

export default ClassRoutineCreateCard
