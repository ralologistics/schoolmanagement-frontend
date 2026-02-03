import { admissionData } from './admissionData'
import { personalData } from './personalData'
import { guardianData } from './guardianData'
import { classAssignment } from './classAssignment'
import { statusData } from './statusData'
import { documentsData } from './documentsData'
import StudentProfile from './StudentProfile'

// Compose a single student record per id (demo/mocked)
const students = admissionData.map((adm) => {
    const id = adm.id
    return {
        id,
        admissionNumber: adm.admissionNumber,
        studentNumber: adm.studentNumber,
        rollNo: adm.rollNo,
        name: (personalData.find((p) => p.id === id) || {}).name || `Student ${id}`,
        personal: personalData.find((p) => p.id === id) || {},
        guardian: guardianData.find((g) => g.id === id) || {},
        classAssignment: classAssignment.find((c) => c.id === id) || {},
        status: statusData.find((s) => s.id === id) || { value: 'Unknown' },
        documents: (documentsData.find((d) => d.id === id) || {}).documents || [],
    }
})

// Simulated fetch API
export function getStudents() {
    return Promise.resolve(students)
}

export function getStudentById(id) {
    const s = students.find((x) => x.id === Number(id))
    return Promise.resolve(s)
}

export { StudentProfile }
export default { getStudents, getStudentById, StudentProfile }
