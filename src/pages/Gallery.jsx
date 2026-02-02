import React, { useEffect, useState } from 'react'
import { StudentAchievementsGallery, EventsPhotos, HighlightTopPerformance, MediaManagement } from '../components/gallery'

export default function Gallery() {
    const [summary, setSummary] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // simulate aggregated gallery data fetch
        // setLoading(true)
        setTimeout(() => {
            setSummary({ totalPhotos: 135, totalEvents: 3, totalAchievements: 8, mediaSize: '965 MB' })
            setLoading(false)
        }, 500)
    }, [])

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Gallery & Media</h1>
                <p className="text-slate-600">Showcase student achievements, events and highlight top performers.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-slate-600">Total Photos</div>
                    <div className="text-2xl font-bold text-slate-800">{loading ? '...' : summary.totalPhotos}</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-slate-600">Events Covered</div>
                    <div className="text-2xl font-bold text-slate-800">{loading ? '...' : summary.totalEvents}</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-slate-600">Achievements</div>
                    <div className="text-2xl font-bold text-slate-800">{loading ? '...' : summary.totalAchievements}</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-slate-600">Media Size</div>
                    <div className="text-2xl font-bold text-slate-800">{loading ? '...' : summary.mediaSize}</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <StudentAchievementsGallery />
                <EventsPhotos />
                <HighlightTopPerformance />
                <MediaManagement />
            </div>
        </div>
    )
}
