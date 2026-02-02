import { useState } from 'react'
import { TeacherTimetable, ClassTimetableCreation, SubjectPeriodAllocation, PrintableTimetable } from '../components/timetable'

function Timetable() {
    const [activeTab, setActiveTab] = useState('overview')

    const tabs = [
        // { id: 'overview', name: 'Overview', icon: '📋' },
        { id: 'teacher', name: 'Teacher Timetable', icon: '👨‍🏫' },
        { id: 'class', name: 'Class Timetable', icon: '📚' },
        { id: 'allocation', name: 'Subject Allocation', icon: '📚' },
        { id: 'print', name: 'Print Timetable', icon: '🖨️' },
    ]

    // const stats = [
    //     { label: 'Total Classes', value: '3', color: 'blue' },
    //     { label: 'Total Teachers', value: '5', color: 'green' },
    //     { label: 'Total Subjects', value: '6', color: 'purple' },
    //     { label: 'Periods Per Day', value: '5', color: 'orange' },
    // ]

    return (
        <div className="p-6">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-800 mb-2">Timetable Management System</h1>
                <p className="text-slate-600">Manage and organize class schedules, teacher assignments, and subject allocations</p>
            </div>

            {/* Statistics Cards */}
            {/* {activeTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className={`bg-white rounded-lg shadow-md p-6 border-l-4 border-${stat.color}-500`}
                        >
                            <div className="text-sm text-slate-600 mb-2">{stat.label}</div>
                            <div className="text-3xl font-bold text-slate-800">{stat.value}</div>
                        </div>
                    ))}
                </div>
            )} */}

            {/* Tab Navigation */}
            <div className="bg-white rounded-lg shadow-md mb-6">
                <div className="flex flex-wrap border-b border-slate-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-4 font-semibold transition-all border-b-2 ${activeTab === tab.id
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-slate-600 hover:text-slate-800'
                                }`}
                        >
                            <span className="mr-2">{tab.icon}</span>
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div>
                {activeTab === 'overview' && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Welcome to Timetable Management</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border-l-4 border-blue-500 pl-4 py-2">
                                <h3 className="font-semibold text-slate-800 mb-2">👨‍🏫 Teacher Timetable</h3>
                                <p className="text-sm text-slate-600">
                                    View teacher schedules showing all their lectures and classroom assignments throughout the week.
                                </p>
                            </div>

                            <div className="border-l-4 border-green-500 pl-4 py-2">
                                <h3 className="font-semibold text-slate-800 mb-2">📚 Class Timetable Creation</h3>
                                <p className="text-sm text-slate-600">
                                    Create and manage class timetables by assigning subjects, teachers, and periods for each class.
                                </p>
                            </div>

                            <div className="border-l-4 border-purple-500 pl-4 py-2">
                                <h3 className="font-semibold text-slate-800 mb-2">📚 Subject & Period Allocation</h3>
                                <p className="text-sm text-slate-600">
                                    Allocate subjects and periods to teachers and classes, track subject distribution and periods per week.
                                </p>
                            </div>

                            <div className="border-l-4 border-orange-500 pl-4 py-2">
                                <h3 className="font-semibold text-slate-800 mb-2">🖨️ Printable Timetable</h3>
                                <p className="text-sm text-slate-600">
                                    Generate and print timetables for classes or individual teachers with professional formatting.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                            <h4 className="font-semibold text-slate-800 mb-2">ℹ️ Quick Tips</h4>
                            <ul className="text-sm text-slate-600 space-y-1">
                                <li>• Use Teacher Timetable tab to view teacher schedules</li>
                                <li>• Create class timetables in the Class Timetable tab</li>
                                <li>• Manage subject allocations in the Subject Allocation tab</li>
                                <li>• Print professional timetables from the Print Timetable tab</li>
                            </ul>
                        </div>
                    </div>
                )}

                {activeTab === 'teacher' && <TeacherTimetable />}

                {activeTab === 'class' && <ClassTimetableCreation />}

                {activeTab === 'allocation' && <SubjectPeriodAllocation />}

                {activeTab === 'print' && <PrintableTimetable />}
            </div>
        </div>
    )
}

export default Timetable
