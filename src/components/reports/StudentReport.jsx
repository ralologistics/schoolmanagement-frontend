import React, { useEffect, useState } from 'react'

export default function StudentReport() {
    const [loading, setLoading] = useState(true)
    const [students, setStudents] = useState([])

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setStudents([
                { id: 'S001', name: 'Aarav Patel', class: '10A' },
                { id: 'S002', name: 'Bhavna Singh', class: '10A' },
                { id: 'S003', name: 'Chirag Kumar', class: '10B' }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Student Report</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading...</div>
            ) : (
                <div className="mt-3">
                    <ul className="text-sm text-slate-700 space-y-1">
                        {students.map(s => <li key={s.id}>{s.name} — {s.class}</li>)}
                    </ul>
                </div>
            )}
        </div>
    )
}
