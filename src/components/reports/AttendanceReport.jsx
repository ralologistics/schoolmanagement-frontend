import React, { useEffect, useState } from 'react'

export default function AttendanceReport() {
    const [loading, setLoading] = useState(true)
    const [attendance, setAttendance] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setAttendance([
                { date: '2024-01-15', class: '10A', present: 28, total: 30 },
                { date: '2024-01-16', class: '10A', present: 27, total: 30 }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Attendance Report</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading...</div>
            ) : (
                <div className="mt-3 text-sm text-slate-700">
                    {attendance.map((a, i) => (
                        <div key={i} className="mb-2">{a.date} — {a.class}: {a.present}/{a.total} present</div>
                    ))}
                </div>
            )}
        </div>
    )
}
