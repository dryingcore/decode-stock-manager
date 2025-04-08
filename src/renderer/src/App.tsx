import { Box, } from '@mui/material'
import { AutoHideSidebar } from './components/AutoHideSidebar'
import StockDashboard from './components/StockDashboard'

const App = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <AutoHideSidebar />

      <Box
        sx={{
          ml: '60px', // margem da sidebar
          flexGrow: 1,
          backgroundColor: '#f5f5f5',
          p: 3,
          overflowY: 'auto'
        }}
      >
        <StockDashboard />
      </Box>
    </Box>
  )
}

export default App
