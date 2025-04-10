import { useState } from 'react'
import { Box, Typography, Tabs, Tab, Paper, Button, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'

export default function StockManager() {
  const [tab, setTab] = useState(0)

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue)
  }

  const getAddButtonText = () => {
    switch (tab) {
      case 1:
        return 'Adicionar Entrada'
      case 2:
        return 'Registrar Saída'
      case 3:
        return 'Adicionar Produto'
      default:
        return 'Adicionar'
    }
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
        Gerenciamento de Estoque
      </Typography>

      <Paper elevation={2} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <Tabs
          value={tab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Visão Geral" />
          <Tab label="Entradas" />
          <Tab label="Saídas" />
          <Tab label="Estoque Atual" />
        </Tabs>

        <Box sx={{ p: 2 }}>
          {tab !== 0 && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 2,
                gap: 2,
                flexWrap: 'wrap'
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                placeholder="Pesquisar..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
                sx={{ flex: 1, minWidth: '200px' }}
              />
              <Button variant="contained" startIcon={<AddIcon />} sx={{ whiteSpace: 'nowrap' }}>
                {getAddButtonText()}
              </Button>
            </Box>
          )}

          {tab === 0 && (
            <Typography>Conteúdo da Visão Geral (ex: resumo, KPIs, alertas...)</Typography>
          )}
          {tab === 1 && (
            <Typography>Conteúdo de Entradas (ex: adicionar item, histórico...)</Typography>
          )}
          {tab === 2 && (
            <Typography>Conteúdo de Saídas (ex: registrar saída, histórico...)</Typography>
          )}
          {tab === 3 && (
            <Typography>
              Conteúdo do Estoque Atual (ex: lista de produtos, quantidades...)
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
  )
}
