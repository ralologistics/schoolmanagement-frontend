// Demo child attendance records (grouped by child id)
export const childAttendance = [
    { id: 1, records: [{ date: '2026-01-20', status: 'Present' }, { date: '2026-01-21', status: 'Present' }, { date: '2026-01-22', status: 'Absent' }] },
    { id: 2, records: [{ date: '2026-01-20', status: 'Present' }, { date: '2026-01-21', status: 'Absent' }, { date: '2026-01-22', status: 'Present' }] },
    { id: 3, records: [{ date: '2026-01-20', status: 'Present' }, { date: '2026-01-21', status: 'Present' }, { date: '2026-01-22', status: 'Present' }] },
    { id: 4, records: [{ date: '2026-01-20', status: 'Absent' }, { date: '2026-01-21', status: 'Present' }, { date: '2026-01-22', status: 'Present' }] },
    { id: 5, records: [{ date: '2026-01-20', status: 'Present' }, { date: '2026-01-21', status: 'Present' }, { date: '2026-01-22', status: 'Present' }] },
]

export function getChildAttendance(childId) {
    const r = childAttendance.find((c) => c.id === Number(childId))
    return Promise.resolve(r ? r.records : [])
}
