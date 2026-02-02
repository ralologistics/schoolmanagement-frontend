import React, { useEffect, useState } from 'react'

export default function AcademicYearSetup() {
    const [loading, setLoading] = useState(true)
    const [yearConfig, setYearConfig] = useState({ academicYear: '', termStart: '', termEnd: '' })

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setYearConfig({ academicYear: '2024-2025', termStart: '2024-04-01', termEnd: '2025-03-31' })
            setLoading(false)
        }, 400)
    }, [])

    const handleChange = (e) => setYearConfig(prev => ({ ...prev, [e.target.name]: e.target.value }))
    const handleSave = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            alert('Academic year settings saved (simulated)')
        }, 500)
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Academic / Year Setup</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading...</div>
            ) : (
                <div className="mt-3 grid grid-cols-1 gap-2">
                    <input name="academicYear" value={yearConfig.academicYear} onChange={handleChange} className="px-2 py-2 border rounded" />
                    <label className="text-sm">Term Start</label>
                    <input type="date" name="termStart" value={yearConfig.termStart} onChange={handleChange} className="px-2 py-2 border rounded" />
                    <label className="text-sm">Term End</label>
                    <input type="date" name="termEnd" value={yearConfig.termEnd} onChange={handleChange} className="px-2 py-2 border rounded" />
                    <div className="mt-2">
                        <button onClick={handleSave} className="px-3 py-1 bg-green-600 text-white rounded">Save</button>
                    </div>
                </div>
            )}
        </div>
    )
}
