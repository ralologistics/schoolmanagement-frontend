import { getChildAttendance } from './childAttendance'
import { getChildFees } from './childFees'
import { getChildResults } from './childResults'
import { getParentNotices } from './parentNotices'

export async function getChildOverview(childId) {
    const [attendance, fees, results, notices] = await Promise.all([
        getChildAttendance(childId),
        getChildFees(childId),
        getChildResults(childId),
        getParentNotices(childId),
    ])

    return {
        childId: Number(childId),
        attendance,
        fees,
        results,
        notices,
    }
}

export { getChildAttendance, getChildFees, getChildResults, getParentNotices }
export default { getChildOverview, getChildAttendance, getChildFees, getChildResults, getParentNotices }
