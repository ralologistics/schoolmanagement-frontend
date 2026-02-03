// Notices targeted for parents
export const parentNotices = [
    { id: 'P-N-001', childId: 1, title: 'PTM - Parent Teacher Meeting', body: 'PTM on 12th Feb at 3pm. Please confirm attendance.', createdAt: '2026-01-28', expiryDate: '2026-02-13' },
    { id: 'P-N-002', childId: 2, title: 'Fee Due Reminder', body: 'Term fee pending. Please clear by 10th Feb to avoid fines.', createdAt: '2026-01-25', expiryDate: '2026-02-10' },
]

export function getParentNotices(parentIdOrChildId) {
    // support either parent id or child id for demo
    const childId = Number(parentIdOrChildId)
    return Promise.resolve(parentNotices.filter((n) => n.childId === childId))
}
