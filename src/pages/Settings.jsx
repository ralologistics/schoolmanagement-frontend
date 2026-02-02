import { useState } from 'react'

function Settings() {
  const [settings, setSettings] = useState([
    { id: 1, category: 'General', setting: 'School Name', value: 'ABC Public School', editable: true },
    { id: 2, category: 'General', setting: 'School Email', value: 'admin@abcschool.com', editable: true },
    { id: 3, category: 'Academic', setting: 'Academic Year', value: '2024-2025', editable: true },
    { id: 4, category: 'Academic', setting: 'Total Classes', value: '12', editable: false },
    { id: 5, category: 'Finance', setting: 'Currency', value: 'INR (₹)', editable: false },
    { id: 6, category: 'Finance', setting: 'Financial Year Start Month', value: 'April', editable: true },
  ])

  const [editingId, setEditingId] = useState(null)
  const [editValue, setEditValue] = useState('')

  const handleEdit = (id, currentValue) => {
    setEditingId(id)
    setEditValue(currentValue)
  }

  const handleSave = (id) => {
    setSettings(settings.map(s => s.id === id ? { ...s, value: editValue } : s))
    setEditingId(null)
    setEditValue('')
  }

  const handleCancel = () => {
    setEditingId(null)
    setEditValue('')
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'General':
        return 'bg-blue-100 text-blue-800'
      case 'Academic':
        return 'bg-purple-100 text-purple-800'
      case 'Finance':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Settings</h1>
        <p className="text-slate-600">Configure system settings here.</p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100 border-b-2 border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Category</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Setting</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Value</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {settings.map((setting) => (
              <tr key={setting.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-3 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(setting.category)}`}>
                    {setting.category}
                  </span>
                </td>
                <td className="px-6 py-3 text-sm text-slate-800 font-medium">{setting.setting}</td>
                <td className="px-6 py-3 text-sm text-slate-600">
                  {editingId === setting.id ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="px-2 py-1 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    setting.value
                  )}
                </td>
                <td className="px-6 py-3 text-sm">
                  {editingId === setting.id ? (
                    <>
                      <button
                        onClick={() => handleSave(setting.id)}
                        className="text-green-600 hover:text-green-800 font-semibold mr-2"
                      >
                        ✓ Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="text-red-600 hover:text-red-800 font-semibold"
                      >
                        ✕ Cancel
                      </button>
                    </>
                  ) : setting.editable ? (
                    <button
                      onClick={() => handleEdit(setting.id, setting.value)}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      ✎ Edit
                    </button>
                  ) : (
                    <span className="text-slate-400 text-xs">Read Only</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Settings
