import React, { useState } from 'react'
import { Box } from '@mui/material'
import { AutoHideSidebar } from './components/AutoHideSidebar'

import Dashboard from './components/StockDashboard'
import Estoque from './components/StockManager'

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<string>('Dashboard')

  const renderContent = (): React.ReactNode => {
    switch (activeView) {
      case 'Dashboard':
        return <Dashboard />
      case 'Estoque':
        return <Estoque />
      case 'Relatórios':
        return null
      default:
        return <Box>404 - Página não encontrada</Box>
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AutoHideSidebar setActiveView={setActiveView} />
      <Box sx={{ flexGrow: 1, p: 2, ml: '60px' }}>{renderContent()}</Box>
    </Box>
  )
}

export default App
