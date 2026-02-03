import { useEffect, useState } from 'react'
import { getChildOverview } from '../components/parentPortal'

export default function ParentPortal() {
    const [childId, setChildId] = useState(1)
    const [overview, setOverview] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let mounted = true

            ; (async () => {
                setLoading(true)
                const data = await getChildOverview(childId)
                if (!mounted) return
                setOverview(data)
                setLoading(false)
            })()

        return () => (mounted = false)
    }, [childId])

    return (
        <div className="p-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">Parent portal</h1>
                    <p className="text-slate-600">View child attendance, fees, results and parent notices (demo).</p>
                </div>
                <div>
                    <label className="text-sm text-slate-500 mr-2">Select child</label>
                    <select value={childId} onChange={(e) => setChildId(Number(e.target.value))} className="px-3 py-2 border rounded">
                        <option value={1}>Aarav Patel (S001)</option>
                        <option value={2}>Bhavna Singh (S002)</option>
                        <option value={3}>Chirag Kumar (S003)</option>
                        <option value={4}>Disha Sharma (S004)</option>
                        <option value={5}>Eshan Verma (S005)</option>
                    </select>
                </div>
            </div>

            {loading || !overview ? (
                <div className="bg-white rounded-lg shadow p-6 text-sm text-slate-500">Loading overview…</div>
            ) : (
                <div className="space-y-6">
                    <section className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-slate-800">Attendance (recent)</h2>
                        <div className="mt-3 flex gap-2 text-sm">
                            {overview.attendance.map((a) => (
                                <div key={a.date} className={`px-3 py-1 rounded ${a.status === 'Present' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                                    {a.date}: {a.status}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-slate-800">Fees</h2>
                        <div className="mt-3 text-sm text-slate-700">Dues: <strong>₹{overview.fees.dues}</strong></div>
                        <div className="mt-2 text-sm">
                            Payments:
                            <ul className="mt-1 ml-4 list-disc text-slate-600">
                                {overview.fees.payments.length === 0 ? <li>No payments</li> : overview.fees.payments.map((p, i) => (
                                    <li key={i}>{p.date} — ₹{p.amount} ({p.method})</li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-slate-800">Recent results</h2>
                        <div className="mt-3 text-sm text-slate-700 grid sm:grid-cols-2 gap-2">
                            {overview.results.map((r, i) => (
                                <div key={i} className="p-2 border rounded">{r.exam} — {r.percentage}%</div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-slate-800">Notices for parent</h2>
                        <div className="mt-3 space-y-2 text-sm text-slate-700">
                            {overview.notices.length === 0 ? <div className="text-slate-500">No notices</div> : overview.notices.map(n => (
                                <div key={n.id} className="p-3 border rounded">
                                    <div className="font-medium">{n.title}</div>
                                    <div className="text-slate-500 mt-1">{n.body}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            )}
        </div>
    )
}
