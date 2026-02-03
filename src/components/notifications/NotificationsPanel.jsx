import { useEffect, useState } from 'react'
import { getLogs } from './notificationLog'
import { sendNotification } from './smsSender'

export default function NotificationsPanel() {
    const [logs, setLogs] = useState([])
    const [sending, setSending] = useState(false)

    useEffect(() => {
        getLogs().then(setLogs)
    }, [])

    const sendDemo = async (type) => {
        setSending(true)
        try {
            const payload = {
                to: '+91 90000 00000',
                vars: {
                    name: 'Parent',
                    childName: 'Aarav Patel',
                    amount: '1,200',
                    dueDate: '2026-02-10',
                    status: 'Absent',
                    date: '2026-02-02',
                    exam: 'Term 1',
                    className: '10',
                    startDate: '2026-02-15',
                    eventTitle: 'Sports Day',
                    time: '08:30',
                    location: 'Main Ground',
                    message: 'School will be closed on Monday due to maintenance.'
                },
                meta: { demo: true, type }
            }
            await sendNotification(type, payload)
            const updated = await getLogs()
            setLogs(updated)
        } finally {
            setSending(false)
        }
    }

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-slate-800">Notifications — demo panel</h3>
            <p className="text-sm text-slate-500 mt-1">Send demo SMS for common notification types (logs stored in-memory).</p>

            <div className="mt-4 flex flex-wrap gap-2">
                {['feeDue', 'attendanceAlert', 'examNotification', 'eventNotification', 'importantAnnouncement'].map((t) => (
                    <button
                        key={t}
                        onClick={() => sendDemo(t)}
                        disabled={sending}
                        className="px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700"
                    >
                        Send {t}
                    </button>
                ))}
            </div>

            <div className="mt-6 text-sm">
                <div className="text-slate-500 mb-2">Recent logs</div>
                <div className="space-y-2">
                    {logs.length === 0 ? (
                        <div className="text-slate-400">No logs yet</div>
                    ) : (
                        logs.map((l) => (
                            <div key={l.id} className="p-2 border rounded text-xs">
                                <div className="text-slate-600">{l.timestamp} • <strong>{l.meta?.type || l.type || 'sms'}</strong></div>
                                <div className="mt-1 text-slate-700">To: {l.to}</div>
                                <div className="mt-1 text-slate-600">{l.message}</div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
