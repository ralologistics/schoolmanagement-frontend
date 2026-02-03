// Demo fee records per child
export const childFees = [
    { id: 1, dues: 0, payments: [{ date: '2026-01-10', amount: 5000, method: 'Online' }] },
    { id: 2, dues: 1200, payments: [{ date: '2025-10-01', amount: 3800, method: 'Cash' }] },
    { id: 3, dues: 0, payments: [{ date: '2026-01-05', amount: 5000, method: 'Online' }] },
    { id: 4, dues: 2500, payments: [{ date: '2025-11-20', amount: 2500, method: 'Cheque' }] },
    { id: 5, dues: 0, payments: [] },
]

export function getChildFees(childId) {
    const r = childFees.find((c) => c.id === Number(childId))
    return Promise.resolve(r || { dues: 0, payments: [] })
}
