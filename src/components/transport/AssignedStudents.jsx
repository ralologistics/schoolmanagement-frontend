import React, { useEffect, useState } from 'react'

export default function AssignedStudents() {
    const [assignments, setAssignments] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setAssignments([
                { vehicle: 'V1', students: ['Aarav Patel', 'Bhavna Singh'] },
                { vehicle: 'V2', students: ['Chirag Kumar'] }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Assigned Students</h3>
            {loading ? <div className="text-sm text-slate-500 mt-2">Loading assignments...</div> : (
                <div className="mt-3 text-sm text-slate-700 space-y-2">
                    {assignments.map(a => (
                        <div key={a.vehicle}><strong>{a.vehicle}:</strong> {a.students.join(', ')}</div>
                    ))}
                </div>
            )}
        </div>
    )
}
