import React from 'react'

export default function ExportTools() {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Export</h3>
            <p className="text-sm text-slate-600 mt-2">Export reports to PDF or Excel formats.</p>
            <div className="mt-3 flex gap-2">
                <button className="px-3 py-1 bg-blue-600 text-white rounded">Export PDF</button>
                <button className="px-3 py-1 bg-slate-600 text-white rounded">Export Excel</button>
            </div>
        </div>
    )
}
