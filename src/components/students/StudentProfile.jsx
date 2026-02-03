import React from 'react'

export default function StudentProfile({ student }) {
    if (!student) return null

    return (
        <div className="mt-6 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">Student profile — {student.name}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1">
                    <div className="text-sm text-slate-500">Admission</div>
                    <div className="mt-1 text-sm text-slate-800">Admission No: <span className="font-medium">{student.admissionNumber}</span></div>
                    <div className="text-sm text-slate-800">Student No: <span className="font-medium">{student.studentNumber}</span></div>
                    <div className="text-sm text-slate-800">Roll No: <span className="font-medium">{student.rollNo}</span></div>
                </div>

                <div>
                    <div className="text-sm text-slate-500">Personal</div>
                    <div className="mt-1 text-sm text-slate-800">DOB: {student.personal?.dob}</div>
                    <div className="text-sm text-slate-800">Gender: {student.personal?.gender}</div>
                    <div className="text-sm text-slate-800">Phone: {student.personal?.phone}</div>
                    <div className="text-sm text-slate-800">Email: {student.personal?.email}</div>
                </div>

                <div>
                    <div className="text-sm text-slate-500">Guardian</div>
                    <div className="mt-1 text-sm text-slate-800">Father: {student.guardian?.fatherName}</div>
                    <div className="text-sm text-slate-800">Mother: {student.guardian?.motherName}</div>
                    <div className="text-sm text-slate-800">Contact: {student.guardian?.guardianPhone}</div>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <div className="text-sm text-slate-500">Class / Section</div>
                    <div className="mt-1 text-sm text-slate-800">{student.classAssignment?.className} — Section {student.classAssignment?.section}</div>
                    <div className="text-sm text-slate-800">House: {student.classAssignment?.house}</div>
                </div>

                <div>
                    <div className="text-sm text-slate-500">Status</div>
                    <div className="mt-1 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${student.status?.value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {student.status?.value}
                        </span>
                        <div className="text-xs text-slate-500 mt-1">since: {student.status?.since}</div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <div className="text-sm text-slate-500">Documents</div>
                <div className="mt-2 flex flex-wrap gap-2">
                    {(student.documents || []).map((d) => (
                        <div key={d.file} className="text-xs bg-slate-100 px-3 py-1 rounded text-slate-700">{d.type}</div>
                    ))}
                </div>
            </div>

        </div>
    )
}
