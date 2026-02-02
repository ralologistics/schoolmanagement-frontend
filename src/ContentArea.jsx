import { Outlet } from 'react-router-dom'

/**
 * Body / Main Content Area - alag component
 * Sidebar, Header, Footer ke beech ka scrollable content
 */
function ContentArea() {
  return (
    <main className="flex-1 overflow-y-auto bg-slate-100 min-h-0">
      <Outlet />
    </main>
  )
}

export default ContentArea
