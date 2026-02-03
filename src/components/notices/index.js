import { adminAnnouncements } from './adminAnnouncements'
import { teacherNotices } from './teacherNotices'
import { studentNotices } from './studentNotices'
import { dashboardNotices } from './dashboardNotices'

const allNotices = [
    ...adminAnnouncements,
    ...teacherNotices,
    ...studentNotices,
    ...dashboardNotices,
]

export function getNotices() {
    return Promise.resolve(allNotices)
}

export function getNoticesByAudience(audience) {
    return Promise.resolve(allNotices.filter((n) => audience === 'all' ? true : n.audience === audience))
}

export function getNoticeById(id) {
    return Promise.resolve(allNotices.find((n) => n.id === id))
}

export default { getNotices, getNoticesByAudience, getNoticeById }
