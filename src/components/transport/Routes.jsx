import React, { useEffect, useState } from 'react'

export default function Routes() {
    const [routes, setRoutes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setRoutes([
                { id: 'R1', name: 'North Route', stops: ['Stop A', 'Stop B', 'Stop C'] },
                { id: 'R2', name: 'East Route', stops: ['Stop D', 'Stop E'] }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Routes</h3>
            {loading ? <div className="text-sm text-slate-500 mt-2">Loading routes...</div> : (
                <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    {routes.map(r => <li key={r.id}>{r.name} — {r.stops.length} stops</li>)}
                </ul>
            )}
        </div>
    )
}
