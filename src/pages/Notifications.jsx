import NotificationsPanel from '../components/notifications/NotificationsPanel'

export default function NotificationsPage() {
    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Notifications</h1>
                <p className="text-slate-600">Send SMS notifications (demo) and view recent logs.</p>
            </div>

            <NotificationsPanel />
        </div>
    )
}
