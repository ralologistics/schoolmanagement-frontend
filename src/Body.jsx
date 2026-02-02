import {
  StatsCards,
  IncomeExpensesCharts,
  NoticeBoard,
  ToDoList,
  CalendarSettingsButton,
  CalendarSection,
  FloatingActionButton,
} from './components/dashboard'

function Body() {
  return (
    <main className="flex-1 overflow-y-auto p-6 bg-slate-100 relative">
      {/* Top Stats Cards */}
      <StatsCards />

      {/* Income and Expenses - Two charts */}
      <IncomeExpensesCharts />

      {/* Notice Board + To Do List - Two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <NoticeBoard />
        </div>
        <div>
          <ToDoList />
        </div>
      </div>

      {/* Calendar Settings button */}
      <CalendarSettingsButton />

      {/* Calendar */}
      <CalendarSection />

      {/* Floating Action Button - green circle */}
      <FloatingActionButton />
    </main>
  )
}

export default Body
