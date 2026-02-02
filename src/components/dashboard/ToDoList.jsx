import { useState } from 'react'

function ToDoList() {
  const [activeTab, setActiveTab] = useState('incomplete')

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-800">To Do List</h3>
        <button className="px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-colors">
          + ADD
        </button>
      </div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab('incomplete')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === 'incomplete'
              ? 'bg-violet-600 text-white'
              : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
          }`}
        >
          INCOMPLETE
        </button>
        <button
          onClick={() => setActiveTab('completed')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === 'completed'
              ? 'bg-violet-600 text-white'
              : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
          }`}
        >
          COMPLETED
        </button>
      </div>
      <div className="min-h-[120px] flex items-center justify-center text-slate-500 text-sm">
        No Do Lists Assigned Yet
      </div>
    </div>
  )
}

export default ToDoList
