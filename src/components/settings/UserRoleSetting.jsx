import React, { useEffect, useState } from 'react'

export default function UserRoleSetting() {
    const [roles, setRoles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setRoles([
                { name: 'admin', canManageSettings: true },
                { name: 'accountant', canManageFinance: true },
                { name: 'teacher', canTakeAttendance: true },
                { name: 'student', canViewOwn: true }
            ])
            setLoading(false)
        }, 400)
    }, [])

    const toggle = (index, key) => {
        setRoles(prev => prev.map((r, i) => i === index ? { ...r, [key]: !r[key] } : r))
    }

    const handleSave = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            alert('Roles updated (simulated)')
        }, 500)
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">User Role Setting</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading roles...</div>
            ) : (
                <div className="mt-3 space-y-2">
                    {roles.map((r, i) => (
                        <div key={r.name} className="flex items-center justify-between">
                            <div className="font-medium">{r.name}</div>
                            <div className="flex gap-2">
                                {Object.keys(r).filter(k => k !== 'name').map(k => (
                                    <label key={k} className="text-sm inline-flex items-center gap-1">
                                        <input type="checkbox" checked={r[k]} onChange={() => toggle(i, k)} />
                                        <span className="capitalize">{k.replace(/([A-Z])/g, ' $1')}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div>
                        <button onClick={handleSave} className="px-3 py-1 bg-green-600 text-white rounded">Save</button>
                    </div>
                </div>
            )}
        </div>
    )
}
