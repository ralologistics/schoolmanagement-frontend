import React, { useEffect, useState } from 'react'

export default function Vehicles() {
    const [vehicles, setVehicles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setVehicles([
                { id: 'V1', reg: 'KA01AB1234', type: 'Bus', capacity: 40 },
                { id: 'V2', reg: 'KA01XY9876', type: 'Van', capacity: 12 }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Vehicles</h3>
            {loading ? <div className="text-sm text-slate-500 mt-2">Loading vehicles...</div> : (
                <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    {vehicles.map(v => <li key={v.id}>{v.reg} — {v.type} ({v.capacity})</li>)}
                </ul>
            )}
        </div>
    )
}
