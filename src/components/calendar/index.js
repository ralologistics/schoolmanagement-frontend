import { academicCalendarSetup } from './academicCalendarSetup'
import { examSchedules } from './examSchedules'
import { holidays } from './holidays'
import { upcomingEvents } from './upcomingEvents'
import { eventReminders } from './eventReminders'

export function getCalendarSetup() {
    return Promise.resolve(academicCalendarSetup)
}

export function getExamSchedules() {
    return Promise.resolve(examSchedules)
}

export function getHolidays() {
    return Promise.resolve(holidays)
}

export function getUpcomingEvents() {
    return Promise.resolve(upcomingEvents)
}

export function getEventReminders() {
    return Promise.resolve(eventReminders)
}

export default { getCalendarSetup, getExamSchedules, getHolidays, getUpcomingEvents, getEventReminders }
