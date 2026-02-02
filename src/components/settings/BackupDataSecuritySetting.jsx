import React, { useEffect, useState } from 'react'

export default function BackupDataSecuritySetting() {
    const [lastBackup, setLastBackup] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLastBackup('2024-01-30T10:20:00Z')
            setLoading(false)
        }, 400)
    }, [])

    const runBackup = () => {
        setLoading(true)
        setTimeout(() => {
            const now = new Date().toISOString()
            setLastBackup(now)
            setLoading(false)
            alert('Backup completed (simulated)')
        }, 800)
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Backup & Data Security</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Checking backup status...</div>
            ) : (
                <div className="mt-3">
                    <div className="text-sm text-slate-600">Last Backup: {lastBackup ? new Date(lastBackup).toLocaleString() : 'Never'}</div>
                    <div className="mt-2">
                        <button onClick={runBackup} className="px-3 py-1 bg-blue-600 text-white rounded">Run Backup</button>
                    </div>
                </div>
            )}
        </div>
    )
}
