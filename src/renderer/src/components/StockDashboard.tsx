import { Box, Typography } from '@mui/material'
import SummaryCards from './Dashboard/SummaryCards'
import BarEntradasSaidas from './Dashboard/BarEntryOut'
import PiePorCategoria from './Dashboard/PieByCategory'
import LineHistoricoEstoque from './Dashboard/LineHistoricoEstoque'
import AreaMovimentacaoAcumulada from './Dashboard/AreaMovimentacaoAcumulada'

const monthlyMovement = [
  { name: 'Jan', entradas: 400, saidas: 240 },
  { name: 'Feb', entradas: 300, saidas: 139 },
  { name: 'Mar', entradas: 500, saidas: 280 },
  { name: 'Apr', entradas: 450, saidas: 210 },
  { name: 'May', entradas: 600, saidas: 300 }
]

const stockByCategory = [
  { name: 'Eletrônicos', value: 400 },
  { name: 'Ferramentas', value: 300 },
  { name: 'Peças', value: 300 },
  { name: 'Outros', value: 200 }
]

const totalStockHistory = [
  { name: 'Jan', total: 1000 },
  { name: 'Feb', total: 1150 },
  { name: 'Mar', total: 1370 },
  { name: 'Apr', total: 1610 },
  { name: 'May', total: 1910 }
]

const StockDashboard: React.FC = () => {
  const totalEntradas = monthlyMovement.reduce((sum, m) => sum + m.entradas, 0)
  const totalSaidas = monthlyMovement.reduce((sum, m) => sum + m.saidas, 0)

  return (
    <Box sx={{ justifyContent: 'flex-start', gap: 2, display: 'flex', flexWrap: 'wrap' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
          Visão Geral do Estoque
        </Typography>
        <SummaryCards totalEntradas={totalEntradas} totalSaidas={totalSaidas} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          gap: 2,
          mt: 2
        }}
      >
        {[
          <BarEntradasSaidas data={monthlyMovement} />,
          <PiePorCategoria data={stockByCategory} />,
          <LineHistoricoEstoque data={totalStockHistory} />,
          <AreaMovimentacaoAcumulada data={monthlyMovement} />
        ].map((ChartComponent, index) => (
          <Box
            key={index}
            sx={{
              flexBasis: { xs: '100%', md: '48%' },
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)',
                zIndex: 1
              }
            }}
          >
            {ChartComponent}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default StockDashboard
