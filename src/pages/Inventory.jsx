import React, { useEffect, useState } from 'react'
import { SchoolAssetsTracking, StationerySupplies, StockRecords } from '../components/inventory'

export default function Inventory() {
    const [summary, setSummary] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // simulate API that aggregates inventory data
        setTimeout(() => {
            setSummary({ totalAssets: 28, totalStockItems: 410, lowStockCount: 3 })
            setLoading(false)
        }, 500)
    }, [])

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Inventory & Assets</h1>
                <p className="text-slate-600">Track school assets, stationery and stock movements.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-slate-600">Total Assets</div>
                    <div className="text-2xl font-bold text-slate-800">{loading ? '...' : summary.totalAssets}</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-slate-600">Total Stock Items</div>
                    <div className="text-2xl font-bold text-slate-800">{loading ? '...' : summary.totalStockItems}</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-slate-600">Low Stock Count</div>
                    <div className="text-2xl font-bold text-slate-800">{loading ? '...' : summary.lowStockCount}</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SchoolAssetsTracking />
                <StationerySupplies />
            </div>

            <div className="mt-4">
                <StockRecords />
            </div>
        </div>
    )
}
