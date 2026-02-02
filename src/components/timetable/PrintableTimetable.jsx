import { useState } from 'react'

function PrintableTimetable() {
    const [selectedOption, setSelectedOption] = useState('class') // 'class' or 'teacher'
    const [selectedClass, setSelectedClass] = useState('10A')
    const [selectedTeacher, setSelectedTeacher] = useState('T001')

    const classes = ['10A', '10B', '10C']
    const teachers = [
        { id: 'T001', name: 'Rajesh Kumar' },
        { id: 'T002', name: 'Priya Sharma' },
        { id: 'T003', name: 'Amit Patel' },
        { id: 'T004', name: 'Neha Gupta' },
    ]

    const classTimetable = {
        '10A': [
            { day: 'Monday', period: 1, subject: 'Mathematics', teacher: 'Rajesh Kumar', time: '09:00 - 09:45' },
            { day: 'Monday', period: 2, subject: 'English', teacher: 'Priya Sharma', time: '09:45 - 10:30' },
            { day: 'Monday', period: 3, subject: 'Science', teacher: 'Amit Patel', time: '10:45 - 11:30' },
            { day: 'Tuesday', period: 1, subject: 'History', teacher: 'Neha Gupta', time: '09:00 - 09:45' },
            { day: 'Tuesday', period: 2, subject: 'Mathematics', teacher: 'Rajesh Kumar', time: '09:45 - 10:30' },
            { day: 'Wednesday', period: 1, subject: 'English', teacher: 'Priya Sharma', time: '09:00 - 09:45' },
            { day: 'Thursday', period: 1, subject: 'Science', teacher: 'Amit Patel', time: '09:00 - 09:45' },
            { day: 'Friday', period: 2, subject: 'Mathematics', teacher: 'Rajesh Kumar', time: '09:45 - 10:30' },
        ],
        '10B': [
            { day: 'Monday', period: 1, subject: 'English', teacher: 'Priya Sharma', time: '09:00 - 09:45' },
            { day: 'Monday', period: 2, subject: 'Mathematics', teacher: 'Rajesh Kumar', time: '09:45 - 10:30' },
            { day: 'Tuesday', period: 1, subject: 'Science', teacher: 'Amit Patel', time: '09:00 - 09:45' },
            { day: 'Wednesday', period: 2, subject: 'History', teacher: 'Neha Gupta', time: '09:45 - 10:30' },
        ],
        '10C': []
    }

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    const periods = [1, 2, 3, 4, 5]

    const getClassTimetableGrid = (classCode) => {
        const timetable = classTimetable[classCode] || []
        const grid = {}

        timetable.forEach(slot => {
            const key = `${slot.day}-${slot.period}`
            grid[key] = slot
        })

        return grid
    }

    const handlePrint = () => {
        window.print()
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-800">🖨️ Printable Timetable</h2>
                <button
                    onClick={handlePrint}
                    className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors print:hidden"
                >
                    🖨️ Print
                </button>
            </div>

            <div className="mb-6 print:hidden grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Select Type</label>
                    <select
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="class">Class Timetable</option>
                        <option value="teacher">Teacher Timetable</option>
                    </select>
                </div>

                {selectedOption === 'class' ? (
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Select Class</label>
                        <select
                            value={selectedClass}
                            onChange={(e) => setSelectedClass(e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {classes.map((cls) => (
                                <option key={cls} value={cls}>{cls}</option>
                            ))}
                        </select>
                    </div>
                ) : (
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Select Teacher</label>
                        <select
                            value={selectedTeacher}
                            onChange={(e) => setSelectedTeacher(e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {teachers.map((teacher) => (
                                <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
                            ))}
                        </select>
                    </div>
                )}
            </div>

            {/* Printable Content */}
            <div className="border-2 border-slate-300 p-8 bg-white print:border-0 print:p-0">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-slate-900">ABC Public School</h1>
                    <h2 className="text-lg font-semibold text-slate-700 mt-2">
                        {selectedOption === 'class' ? `Class ${selectedClass} Timetable` : `Teacher: ${teachers.find(t => t.id === selectedTeacher)?.name}`}
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">Academic Year: 2024-2025</p>
                    <p className="text-xs text-slate-500 mt-4">Printed on: {new Date().toLocaleDateString()}</p>
                </div>

                {selectedOption === 'class' ? (
                    <div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border-2 border-slate-900">
                                <thead>
                                    <tr className="bg-slate-900 text-white">
                                        <th className="border-2 border-slate-900 px-4 py-3 text-left font-semibold">Period</th>
                                        {days.map((day) => (
                                            <th key={day} className="border-2 border-slate-900 px-4 py-3 text-center font-semibold">
                                                {day}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {periods.map((period) => {
                                        const grid = getClassTimetableGrid(selectedClass)
                                        return (
                                            <tr key={period}>
                                                <td className="border-2 border-slate-900 px-4 py-3 font-bold bg-slate-200">
                                                    Period {period}
                                                </td>
                                                {days.map((day) => {
                                                    const slot = grid[`${day}-${period}`]
                                                    return (
                                                        <td
                                                            key={`${day}-${period}`}
                                                            className="border-2 border-slate-900 px-4 py-3 text-center text-sm"
                                                        >
                                                            {slot ? (
                                                                <div className="bg-blue-50 p-2 rounded">
                                                                    <div className="font-bold text-slate-900">{slot.subject}</div>
                                                                    <div className="text-xs text-slate-600 mt-1">{slot.teacher}</div>
                                                                    <div className="text-xs text-slate-600">{slot.time}</div>
                                                                </div>
                                                            ) : (
                                                                <span className="text-slate-400">-</span>
                                                            )}
                                                        </td>
                                                    )
                                                })}
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 p-4 bg-slate-100 rounded-lg border border-slate-300">
                            <p className="text-sm text-slate-700"><strong>Class:</strong> {selectedClass}</p>
                            <p className="text-sm text-slate-700 mt-1"><strong>Total Periods:</strong> 5 per day</p>
                            <p className="text-sm text-slate-700 mt-1"><strong>Break Time:</strong> 10:30 - 10:45</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p className="text-center text-slate-600 mb-6">
                            Teacher: <strong>{teachers.find(t => t.id === selectedTeacher)?.name}</strong>
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border-2 border-slate-900">
                                <thead>
                                    <tr className="bg-slate-900 text-white">
                                        <th className="border-2 border-slate-900 px-4 py-3 text-left font-semibold">Period</th>
                                        {days.map((day) => (
                                            <th key={day} className="border-2 border-slate-900 px-4 py-3 text-center font-semibold">
                                                {day}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {periods.map((period) => (
                                        <tr key={period}>
                                            <td className="border-2 border-slate-900 px-4 py-3 font-bold bg-slate-200">
                                                Period {period}
                                            </td>
                                            {days.map((day) => (
                                                <td
                                                    key={`${day}-${period}`}
                                                    className="border-2 border-slate-900 px-4 py-3 text-center text-sm"
                                                >
                                                    <span className="text-slate-400">-</span>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                <div className="mt-8 flex justify-between text-sm text-slate-600">
                    <div>
                        <p className="font-semibold">Principal</p>
                        <p className="mt-4">_________________</p>
                    </div>
                    <div>
                        <p className="font-semibold">Academic Coordinator</p>
                        <p className="mt-4">_________________</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrintableTimetable
