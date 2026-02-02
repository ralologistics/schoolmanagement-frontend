import { useState } from 'react'

function TeacherTimetable() {
    const [selectedTeacher, setSelectedTeacher] = useState('T001')
    const [teacherTimetableData] = useState([
        {
            teacherId: 'T001',
            teacherName: 'Rajesh Kumar',
            subject: 'Mathematics',
            schedule: [
                { day: 'Monday', class: '10A', period: '1', time: '09:00 - 09:45', room: 'A1' },
                { day: 'Monday', class: '10B', period: '2', time: '09:45 - 10:30', room: 'B1' },
                { day: 'Tuesday', class: '10A', period: '3', time: '10:45 - 11:30', room: 'A1' },
                { day: 'Wednesday', class: '10B', period: '1', time: '09:00 - 09:45', room: 'B1' },
                { day: 'Thursday', class: '10A', period: '4', time: '11:30 - 12:15', room: 'A1' },
                { day: 'Friday', class: '10B', period: '2', time: '09:45 - 10:30', room: 'B1' },
            ]
        },
        {
            teacherId: 'T002',
            teacherName: 'Priya Sharma',
            subject: 'English',
            schedule: [
                { day: 'Monday', class: '10A', period: '2', time: '09:45 - 10:30', room: 'A2' },
                { day: 'Tuesday', class: '10B', period: '1', time: '09:00 - 09:45', room: 'B2' },
                { day: 'Wednesday', class: '10A', period: '3', time: '10:45 - 11:30', room: 'A2' },
                { day: 'Thursday', class: '10B', period: '4', time: '11:30 - 12:15', room: 'B2' },
                { day: 'Friday', class: '10A', period: '1', time: '09:00 - 09:45', room: 'A2' },
            ]
        },
        {
            teacherId: 'T003',
            teacherName: 'Amit Patel',
            subject: 'Science',
            schedule: [
                { day: 'Monday', class: '10B', period: '3', time: '10:45 - 11:30', room: 'B3' },
                { day: 'Tuesday', class: '10A', period: '4', time: '11:30 - 12:15', room: 'A3' },
                { day: 'Wednesday', class: '10B', period: '2', time: '09:45 - 10:30', room: 'B3' },
                { day: 'Thursday', class: '10A', period: '1', time: '09:00 - 09:45', room: 'A3' },
                { day: 'Friday', class: '10B', period: '3', time: '10:45 - 11:30', room: 'B3' },
            ]
        },
    ])

    const currentTeacher = teacherTimetableData.find(t => t.teacherId === selectedTeacher)
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    const periods = ['1', '2', '3', '4']

    const getScheduleForDayPeriod = (day, period) => {
        return currentTeacher?.schedule.find(s => s.day === day && s.period === period)
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">📅 Teacher Timetable</h2>

            <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Select Teacher</label>
                <select
                    value={selectedTeacher}
                    onChange={(e) => setSelectedTeacher(e.target.value)}
                    className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {teacherTimetableData.map((teacher) => (
                        <option key={teacher.teacherId} value={teacher.teacherId}>
                            {teacher.teacherName} - {teacher.subject}
                        </option>
                    ))}
                </select>
            </div>

            {currentTeacher && (
                <div>
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <h3 className="font-semibold text-slate-800">{currentTeacher.teacherName}</h3>
                        <p className="text-sm text-slate-600">Subject: {currentTeacher.subject}</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-slate-300">
                            <thead>
                                <tr className="bg-slate-500">
                                    <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold">Period</th>
                                    {days.map((day) => (
                                        <th key={day} className="border border-slate-300 px-4 py-2  text-center text-sm font-semibold">
                                            {day}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {periods.map((period) => (
                                    <tr key={period}>
                                        <td className="border border-slate-200 px-4 py-2 font-semibold bg-slate-300">
                                            Period {period}
                                        </td>
                                        {days.map((day) => {
                                            const schedule = getScheduleForDayPeriod(day, period)
                                            return (
                                                <td
                                                    key={`${day}-${period}`}
                                                    className="border border-slate-200 px-4 py-2 text-center text-sm"
                                                >
                                                    {schedule ? (
                                                        <div className="bg-green-50 p-2 rounded">
                                                            <div className="font-semibold text-green-800">{schedule.class}</div>
                                                            <div className="text-xs text-green-700">{schedule.time}</div>
                                                            <div className="text-xs text-slate-600">Room {schedule.room}</div>
                                                        </div>
                                                    ) : (
                                                        <span className="text-slate-700">-</span>
                                                    )}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-2">Weekly Summary</h4>
                        <p className="text-sm text-slate-600">
                            Total Classes: <span className="font-semibold">{currentTeacher.schedule.length}</span>
                        </p>
                        <p className="text-sm text-slate-600">
                            Classes per Day: <span className="font-semibold">{Math.ceil(currentTeacher.schedule.length / 5)}</span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TeacherTimetable
