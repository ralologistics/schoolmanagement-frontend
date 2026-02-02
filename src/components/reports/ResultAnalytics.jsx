import React, { useEffect, useState } from 'react'

export default function ResultAnalytics() {
    const [loading, setLoading] = useState(true)
    const [results, setResults] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setResults([
                { subject: 'Math', avg: 72 },
                { subject: 'Science', avg: 68 },
                { subject: 'English', avg: 75 }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Result Analytics</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading analytics...</div>
            ) : (
                <div className="mt-3 text-sm text-slate-700">
                    {results.map(r => (
                        <div key={r.subject} className="mb-2">{r.subject}: Average {r.avg}%</div>
                    ))}
                </div>
            )}
        </div>
    )
}
