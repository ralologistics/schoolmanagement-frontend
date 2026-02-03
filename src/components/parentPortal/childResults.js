// Demo recent results for children
export const childResults = [
    { id: 1, results: [{ exam: 'Term 1', className: '10', percentage: 86 }, { exam: 'Mid-term', className: '10', percentage: 82 }] },
    { id: 2, results: [{ exam: 'Term 1', className: '10', percentage: 78 }] },
    { id: 3, results: [{ exam: 'Term 1', className: '10', percentage: 91 }] },
    { id: 4, results: [{ exam: 'Term 1', className: '10', percentage: 64 }] },
    { id: 5, results: [{ exam: 'Term 1', className: '10', percentage: 88 }] },
]

export function getChildResults(childId) {
    const r = childResults.find((c) => c.id === Number(childId))
    return Promise.resolve(r ? r.results : [])
}
