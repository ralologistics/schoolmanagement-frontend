import React from 'react'
import { Routes, Vehicles, TransportFees, AssignedStudents, DriverDetails } from '../components/transport'

export default function Transport() {
    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Transport Management</h1>
                <p className="text-slate-600">Manage routes, vehicles, drivers, assigned students and transport fees.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Routes />
                <Vehicles />
                <DriverDetails />
                <AssignedStudents />
                <TransportFees />
            </div>
        </div>
    )
}
