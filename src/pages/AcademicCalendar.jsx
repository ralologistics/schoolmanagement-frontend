import { useEffect, useState } from 'react'
import { getCalendarSetup, getExamSchedules, getHolidays, getUpcomingEvents, getEventReminders } from '../components/calendar'

export default function AcademicCalendar() {
    const [setup, setSetup] = useState([])
    const [exams, setExams] = useState([])
    const [hols, setHols] = useState([])
    const [events, setEvents] = useState([])
    const [reminders, setReminders] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let mounted = true
        Promise.all([getCalendarSetup(), getExamSchedules(), getHolidays(), getUpcomingEvents(), getEventReminders()])
            .then(([cs, es, hs, evs, rms]) => {
                if (!mounted) return
                setSetup(cs)
                setExams(es)
                setHols(hs)
                setEvents(evs)
                setReminders(rms)
                setLoading(false)
            })
        return () => (mounted = false)
    }, [])

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Academic calendar & events</h1>
                <p className="text-slate-600">Setup, exam schedules, holidays and upcoming events (demo).</p>
            </div>

            {loading ? (
                <div className="bg-white rounded-lg shadow p-6 text-sm text-slate-500">Loading calendar…</div>
            ) : (
                <div className="space-y-6">
                    <section className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-slate-800">Academic setup</h2>
                        {setup.map((c) => (
                            <div key={c.id} className="mt-3 text-sm text-slate-700">
                                <div><strong>{c.academicYear}</strong></div>
                                <div className="text-slate-500">Term 1: {c.term1Start} → {c.term1End}</div>
                                <div className="text-slate-500">Term 2: {c.term2Start} → {c.term2End}</div>
                                <div className="mt-2 text-slate-600">Important: {c.importantDates.join(', ')}</div>
                            </div>
                        ))}
                    </section>

                    <section className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-slate-800">Exam schedules</h2>
                        <div className="mt-3 grid gap-3">
                            {exams.map((ex) => (
                                <div key={ex.id} className="p-3 border rounded text-sm">
                                    <div className="font-medium">{ex.name} — Class {ex.className}</div>
                                    <div className="text-slate-500">{ex.startDate} → {ex.endDate}</div>
                                    <div className="mt-1 text-slate-600">Subjects: {ex.subjects.join(', ')}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-slate-800">Holidays</h2>
                        <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                            {hols.map((h) => (
                                <div key={h.id} className="p-3 border rounded">
                                    <div className="font-medium">{h.name}</div>
                                    <div className="text-slate-500">{h.date} {h.recurring ? '• recurring' : ''}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-slate-800">Upcoming events & reminders</h2>
                        <div className="mt-3 grid gap-3">
                            {events.map((ev) => (
                                <div key={ev.id} className="p-3 border rounded text-sm">
                                    <div className="font-medium">{ev.title} — <span className="text-slate-500">{ev.date} {ev.time}</span></div>
                                    <div className="text-slate-600">{ev.description} • {ev.location}</div>
                                    <div className="mt-2 text-xs text-slate-500">Reminders: {reminders.filter(r => r.eventId === ev.id).map(r => `${r.remindOn} (${r.message})`).join('; ') || '—'}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            )}
        </div>
    )
}
