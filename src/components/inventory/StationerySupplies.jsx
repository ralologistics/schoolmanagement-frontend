import React, { useEffect, useState } from 'react'

export default function StationerySupplies() {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setItems([
                { sku: 'ST-001', name: 'A4 Notebooks', qty: 250 },
                { sku: 'ST-002', name: 'Pens (Box)', qty: 120 },
                { sku: 'ST-003', name: 'Markers', qty: 40 }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Stationery & Supplies</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading supplies...</div>
            ) : (
                <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    {items.map(i => <li key={i.sku}>{i.name} — {i.qty} in stock</li>)}
                </ul>
            )}
        </div>
    )
}
