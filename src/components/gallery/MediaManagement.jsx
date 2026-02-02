import React, { useEffect, useState } from 'react'

export default function MediaManagement() {
    const [loading, setLoading] = useState(true)
    const [mediaFiles, setMediaFiles] = useState([])

    useEffect(() => {
        // setLoading(true)
        setTimeout(() => {
            setMediaFiles([
                { id: 1, fileName: 'sports_day_2024.zip', type: 'Album', size: '245 MB' },
                { id: 2, fileName: 'science_expo.zip', type: 'Album', size: '180 MB' },
                { id: 3, fileName: 'founders_day_video.mp4', type: 'Video', size: '540 MB' }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Media Management</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading media...</div>
            ) : (
                <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    {mediaFiles.map(m => (
                        <li key={m.id}>{m.fileName} — {m.type} — {m.size}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
