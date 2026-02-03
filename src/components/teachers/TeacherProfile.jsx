import React from 'react'

export default function TeacherProfile({ teacher }) {
    if (!teacher) return null

    return (
        <div className="mt-6 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">Teacher profile — {teacher.name}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <div className="text-sm text-slate-500">Employment</div>
                    <div className="mt-1 text-sm text-slate-800">Employee No: <span className="font-medium">{teacher.employeeNumber}</span></div>
                    <div className="text-sm text-slate-800">Designation: {teacher.designation}</div>
                    <div className="text-sm text-slate-800">Joined: {teacher.joining?.joined}</div>
                </div>

                <div>
                    <div className="text-sm text-slate-500">Personal</div>
                    <div className="mt-1 text-sm text-slate-800">Email: {teacher.email}</div>
                    <div className="text-sm text-slate-800">Phone: {teacher.phone}</div>
                    <div className="text-sm text-slate-800">Qualification: {teacher.qualification}</div>
                    <div className="text-sm text-slate-800">Experience: {teacher.experience} yrs</div>
                </div>

                <div>
                    <div className="text-sm text-slate-500">Status</div>
                    <div className="mt-1 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${teacher.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {teacher.status}
                        </span>
                        {teacher.joining?.left ? <div className="text-xs text-slate-500 mt-1">Left: {teacher.joining.left} — {teacher.joining.reason}</div> : null}
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <div className="text-sm text-slate-500">Assigned classes & subjects</div>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(teacher.assignments || []).map((a, idx) => (
                        <div key={idx} className="text-sm bg-slate-50 p-2 rounded border">{a.className} {a.section} — <span className="font-medium">{a.subject}</span></div>
                    ))}
                </div>
            </div>

            <div className="mt-5">
                <div className="text-sm text-slate-500">Documents</div>
                <div className="mt-2 flex flex-wrap gap-2">
                    {(teacher.documents || []).map((d) => (
                        <div key={d.file} className="text-xs bg-slate-100 px-3 py-1 rounded text-slate-700">{d.type}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
