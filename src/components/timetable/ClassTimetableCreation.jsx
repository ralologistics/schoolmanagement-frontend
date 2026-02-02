import { useState } from 'react'

function ClassTimetableCreation() {
    const [selectedClass, setSelectedClass] = useState('10A')
    const [classes] = useState(['10A', '10B', '10C'])
    const [timetables, setTimetables] = useState({
        '10A': [
            { day: 'Monday', period: 1, subject: 'Mathematics', teacher: 'Rajesh Kumar', time: '09:00 - 09:45' },
            { day: 'Monday', period: 2, subject: 'English', teacher: 'Priya Sharma', time: '09:45 - 10:30' },
            { day: 'Monday', period: 3, subject: 'Science', teacher: 'Amit Patel', time: '10:45 - 11:30' },
            { day: 'Tuesday', period: 1, subject: 'History', teacher: 'Neha Gupta', time: '09:00 - 09:45' },
            { day: 'Tuesday', period: 2, subject: 'Mathematics', teacher: 'Rajesh Kumar', time: '09:45 - 10:30' },
        ],
        '10B': [
            { day: 'Monday', period: 1, subject: 'English', teacher: 'Priya Sharma', time: '09:00 - 09:45' },
            { day: 'Monday', period: 2, subject: 'Mathematics', teacher: 'Rajesh Kumar', time: '09:45 - 10:30' },
        ],
        '10C': []
    })

    const [editingSlot, setEditingSlot] = useState(null)
    const [formData, setFormData] = useState({
        day: 'Monday',
        period: 1,
        subject: '',
        teacher: ''
    })

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    const periods = [1, 2, 3, 4, 5]
    const subjects = ['Mathematics', 'English', 'Science', 'History', 'Computer Science', 'Physical Education']
    const teachers = ['Rajesh Kumar', 'Priya Sharma', 'Amit Patel', 'Neha Gupta', 'Vikram Singh']

    const currentTimetable = timetables[selectedClass] || []

    const handleAddSlot = () => {
        setEditingSlot('new')
        setFormData({ day: 'Monday', period: 1, subject: '', teacher: '' })
    }

    const handleSaveSlot = () => {
        if (!formData.subject || !formData.teacher) {
            alert('Please fill all fields')
            return
        }

        const timeMap = {
            1: '09:00 - 09:45',
            2: '09:45 - 10:30',
            3: '10:45 - 11:30',
            4: '11:30 - 12:15',
            5: '12:15 - 01:00'
        }

        const newSlot = {
            day: formData.day,
            period: formData.period,
            subject: formData.subject,
            teacher: formData.teacher,
            time: timeMap[formData.period]
        }

        if (editingSlot === 'new') {
            setTimetables({
                ...timetables,
                [selectedClass]: [...currentTimetable, newSlot]
            })
        }

        setEditingSlot(null)
        setFormData({ day: 'Monday', period: 1, subject: '', teacher: '' })
    }

    const handleDeleteSlot = (index) => {
        const updated = currentTimetable.filter((_, i) => i !== index)
        setTimetables({
            ...timetables,
            [selectedClass]: updated
        })
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">🛠️ Class Timetable Creation</h2>

            <div className="mb-6 flex justify-between items-center">
                <div className="flex-1">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Select Class</label>
                    <select
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {classes.map((cls) => (
                            <option key={cls} value={cls}>
                                {cls}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    onClick={handleAddSlot}
                    className="ml-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                    ➕ Add Period
                </button>
            </div>

            {editingSlot === 'new' && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-slate-800 mb-4">Add New Period</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Day</label>
                            <select
                                value={formData.day}
                                onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {days.map((day) => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Period</label>
                            <select
                                value={formData.period}
                                onChange={(e) => setFormData({ ...formData, period: parseInt(e.target.value) })}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {periods.map((period) => (
                                    <option key={period} value={period}>Period {period}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Subject</label>
                            <select
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Subject</option>
                                {subjects.map((subject) => (
                                    <option key={subject} value={subject}>{subject}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Teacher</label>
                            <select
                                value={formData.teacher}
                                onChange={(e) => setFormData({ ...formData, teacher: e.target.value })}
                                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Teacher</option>
                                {teachers.map((teacher) => (
                                    <option key={teacher} value={teacher}>{teacher}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-4 justify-end">
                        <button
                            onClick={handleSaveSlot}
                            className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
                        >
                            ✓ Save
                        </button>
                        <button
                            onClick={() => setEditingSlot(null)}
                            className="px-4 py-2 bg-slate-300 text-slate-800 font-semibold rounded-lg hover:bg-slate-400"
                        >
                            ✕ Cancel
                        </button>
                    </div>
                </div>
            )}

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-300">
                    <thead>
                        <tr className="bg-slate-100">
                            <th className="border border-slate-300 px-4 py-2 text-left text-sm font-semibold">Day</th>
                            <th className="border border-slate-300 px-4 py-2 text-left text-sm font-semibold">Period</th>
                            <th className="border border-slate-300 px-4 py-2 text-left text-sm font-semibold">Subject</th>
                            <th className="border border-slate-300 px-4 py-2 text-left text-sm font-semibold">Teacher</th>
                            <th className="border border-slate-300 px-4 py-2 text-left text-sm font-semibold">Time</th>
                            <th className="border border-slate-300 px-4 py-2 text-left text-sm font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTimetable.length > 0 ? (
                            currentTimetable.map((slot, index) => (
                                <tr key={index} className="hover:bg-slate-50">
                                    <td className="border border-slate-300 px-4 py-2 text-sm">{slot.day}</td>
                                    <td className="border border-slate-300 px-4 py-2 text-sm font-semibold">Period {slot.period}</td>
                                    <td className="border border-slate-300 px-4 py-2 text-sm">{slot.subject}</td>
                                    <td className="border border-slate-300 px-4 py-2 text-sm">{slot.teacher}</td>
                                    <td className="border border-slate-300 px-4 py-2 text-sm">{slot.time}</td>
                                    <td className="border border-slate-300 px-4 py-2 text-sm">
                                        <button
                                            onClick={() => handleDeleteSlot(index)}
                                            className="text-red-600 hover:text-red-800 font-semibold"
                                        >
                                            🗑 Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="border border-slate-300 px-4 py-2 text-center text-slate-500">
                                    No periods added. Click "Add Period" to start.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ClassTimetableCreation
