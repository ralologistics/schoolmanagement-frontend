import React, { useEffect, useState } from 'react'

export default function SchoolAssetsTracking() {
    const [loading, setLoading] = useState(true)
    const [assets, setAssets] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setAssets([
                { id: 'A001', name: 'Projector - Lab 1', category: 'Electronics', condition: 'Good' },
                { id: 'A002', name: 'Desktop - Library', category: 'Electronics', condition: 'Fair' },
                { id: 'A003', name: 'School Van', category: 'Vehicle', condition: 'Good' }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">School Assets Tracking</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading assets...</div>
            ) : (
                <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    {assets.map(a => (
                        <li key={a.id}>{a.name} — {a.category} — {a.condition}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
