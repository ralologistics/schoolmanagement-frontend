import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import ContentArea from './ContentArea'
import { useState } from 'react'

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-100">
      {/* Sidebar - alag component */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Right side: Header + Body + Footer */}
      <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
        {/* Header - alag component */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Body / Main Content - alag component */}
        <ContentArea />
        {/* Footer - alag component */}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
