import React, { useEffect, useState } from 'react'

export default function DriverDetails() {
    const [drivers, setDrivers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setDrivers([
                { id: 'D1', name: 'Ramesh', phone: '+91-9000011111', vehicle: 'V1' },
                { id: 'D2', name: 'Suresh', phone: '+91-9000022222', vehicle: 'V2' }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Driver Details</h3>
            {loading ? <div className="text-sm text-slate-500 mt-2">Loading drivers...</div> : (
                <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    {drivers.map(d => <li key={d.id}>{d.name} — {d.phone} — {d.vehicle}</li>)}
                </ul>
            )}
        </div>
    )
}
