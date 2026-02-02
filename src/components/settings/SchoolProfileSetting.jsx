import React, { useEffect, useState } from 'react'

export default function SchoolProfileSetting() {
    const [loading, setLoading] = useState(true)
    const [profile, setProfile] = useState({ name: '', address: '', phone: '', email: '' })

    useEffect(() => {
        // simulate API fetch
        setLoading(true)
        setTimeout(() => {
            setProfile({ name: 'ABC Public School', address: '123 Main St', phone: '+91-9000000000', email: 'admin@abcschool.com' })
            setLoading(false)
        }, 500)
    }, [])

    const handleChange = (e) => setProfile(prev => ({ ...prev, [e.target.name]: e.target.value }))
    const handleSave = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            alert('School profile saved (simulated)')
        }, 600)
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800">School Profile</h3>
            {loading ? (
                <div className="text-sm text-slate-500 mt-2">Loading...</div>
            ) : (
                <div className="mt-3 grid grid-cols-1 gap-2">
                    <input name="name" value={profile.name} onChange={handleChange} className="px-2 py-2 border rounded" />
                    <input name="address" value={profile.address} onChange={handleChange} className="px-2 py-2 border rounded" />
                    <input name="phone" value={profile.phone} onChange={handleChange} className="px-2 py-2 border rounded" />
                    <input name="email" value={profile.email} onChange={handleChange} className="px-2 py-2 border rounded" />
                    <div className="mt-2">
                        <button onClick={handleSave} className="px-3 py-1 bg-green-600 text-white rounded">Save</button>
                    </div>
                </div>
            )}
        </div>
    )
}
