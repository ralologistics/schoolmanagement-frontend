import { registrationData } from './registrationData'
import { profileData } from './profileData'
import { joiningLeaving } from './joiningLeaving'
import { assignedClasses } from './assignedClasses'
// import { staffListing } from './staffListing'
import { documentsData } from './documentsData'
import TeacherProfile from './TeacherProfile'

const teachers = registrationData.map((reg) => {
    const id = reg.id
    return {
        id,
        employeeNumber: reg.employeeNumber,
        joiningDate: reg.joiningDate,
        designation: reg.designation,
        status: reg.status,
        name: (profileData.find((p) => p.id === id) || {}).name || `Teacher ${id}`,
        email: (profileData.find((p) => p.id === id) || {}).email || '',
        phone: (profileData.find((p) => p.id === id) || {}).phone || '',
        dob: (profileData.find((p) => p.id === id) || {}).dob || '',
        qualification: (profileData.find((p) => p.id === id) || {}).qualification || (reg.qualification || ''),
        experience: reg.experience || (profileData.find((p) => p.id === id) || {}).experience || 0,
        joining: joiningLeaving.find((j) => j.id === id) || {},
        assignments: (assignedClasses.find((a) => a.id === id) || {}).assignments || [],
        documents: (documentsData.find((d) => d.id === id) || {}).documents || [],
    }
})

export function getTeachers() {
    return Promise.resolve(teachers)
}

export function getTeacherById(id) {
    const t = teachers.find((x) => x.id === id || x.id === String(id))
    return Promise.resolve(t)
}

export { TeacherProfile }
export default { getTeachers, getTeacherById, TeacherProfile }
