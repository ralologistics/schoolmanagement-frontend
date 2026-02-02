import React, { useEffect, useState } from 'react'

export default function HighlightTopPerformance() {
    const [loading, setLoading] = useState(true)
    const [topPerformers, setTopPerformers] = useState([])

    useEffect(() => {
        // setLoading(true)
        setTimeout(() => {
            setTopPerformers([
                { rank: 1, student: 'Aarav Patel', score: 95, class: '10A' },
                { rank: 2, student: 'Disha Sharma', score: 92, class: '10A' },
                { rank: 3, student: 'Eshan Verma', score: 89, class: '10B' }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Highlight Top Performance</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading top performers...</div>
            ) : (
                <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    {topPerformers.map(t => (
                        <li key={t.rank}>#{t.rank} — {t.student} ({t.class}) — {t.score}%</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
