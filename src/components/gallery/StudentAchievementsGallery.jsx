import React, { useEffect, useState } from 'react'

export default function StudentAchievementsGallery() {
    const [loading, setLoading] = useState(true)
    const [achievements, setAchievements] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setAchievements([
                { id: 1, student: 'Aarav Patel', award: 'Science Fair Winner', date: '2024-01-15' },
                { id: 2, student: 'Bhavna Singh', award: 'Debate Competition - 1st Place', date: '2024-01-10' },
                { id: 3, student: 'Chirag Kumar', award: 'Sports Excellence', date: '2024-01-05' }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Student Achievements Gallery</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading achievements...</div>
            ) : (
                <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    {achievements.map(a => (
                        <li key={a.id}>{a.student} — {a.award} ({a.date})</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
