import React, { useEffect, useState } from 'react'

export default function EventsPhotos() {
    const [loading, setLoading] = useState(true)
    const [events, setEvents] = useState([])

    useEffect(() => {
        // setLoading(true)
        setTimeout(() => {
            setEvents([
                { id: 1, eventName: 'Annual Sports Day', date: '2024-01-20', photoCount: 45 },
                { id: 2, eventName: 'Science Exhibition', date: '2024-01-15', photoCount: 32 },
                { id: 3, eventName: 'Founder\'s Day Celebration', date: '2024-01-10', photoCount: 58 }
            ])
            setLoading(false)
        }, 400)
    }, [])

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">Events Photos</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading events...</div>
            ) : (
                <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    {events.map(e => (
                        <li key={e.id}>{e.eventName} ({e.date}) — {e.photoCount} photos</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
