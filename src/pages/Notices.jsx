import { useEffect, useState } from 'react'
import { getNoticesByAudience } from '../components/notices'

function isExpired(dateStr) {
    if (!dateStr) return false
    const d = new Date(dateStr)
    const today = new Date()
    // ignore time portion
    return d.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)
}

export default function Notices() {
    const [filter, setFilter] = useState('all')
    const [notices, setNotices] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let mounted = true
        getNoticesByAudience(filter).then((data) => {
            if (!mounted) return
            setNotices(data)
            setLoading(false)
        })
        return () => (mounted = false)
    }, [filter])

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Notices</h1>
                <p className="text-slate-600">Admin, teacher and student notices (demo data).</p>
            </div>

            <div className="flex gap-2 mb-4">
                {['all', 'teachers', 'students'].map((f) => (
                    <button
                        key={f}
                        onClick={() => { setFilter(f); setLoading(true) }}
                        className={`px-3 py-1 rounded ${filter === f ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}
                    >
                        {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                ))}
            </div>

            <div className="bg-white rounded-lg shadow p-4">
                {loading ? (
                    <div className="text-sm text-slate-500">Loading notices…</div>
                ) : notices.length === 0 ? (
                    <div className="text-sm text-slate-500">No notices for <strong>{filter}</strong>.</div>
                ) : (
                    <div className="space-y-3">
                        {notices.map((n) => (
                            <div key={n.id} className="p-3 border rounded flex justify-between items-start gap-4">
                                <div>
                                    <div className="text-sm text-slate-500">{n.audience?.toUpperCase() || 'ALL'} • {n.createdAt}</div>
                                    <div className="mt-1 text-lg text-slate-800 font-semibold">{n.title}</div>
                                    <div className="mt-1 text-sm text-slate-600">{n.body}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-slate-500">Expires</div>
                                    <div className={`mt-1 font-medium ${isExpired(n.expiryDate) ? 'text-red-600' : 'text-slate-800'}`}>{n.expiryDate || '—'}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
