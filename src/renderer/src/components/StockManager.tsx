declare global {
  interface Window {
    electronAPI: {
      saveData: (data: any) => void
      loadData: () => Promise<any>
    }
  }
}

import { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  Button,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'

export default function StockManager() {
  const [tab, setTab] = useState(0)
  const [items, setItems] = useState<any[]>([])

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

  const handleAdd = () => {
    const novoItem = {
      tipo: tab === 1 ? 'entrada' : tab === 2 ? 'saida' : tab === 3 ? 'produto' : 'desconhecido',
      nome: `Item ${items.length + 1}`,
      data: new Date().toISOString()
    }
    const novos = [...items, novoItem]
    setItems(novos)
    window.electronAPI.saveData(novos)
  }

  const carregarDados = async () => {
    const dados = await window.electronAPI.loadData()
    if (dados) setItems(dados)
  }

  useEffect(() => {
    carregarDados()
  }, [])

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
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleAdd}
                sx={{ whiteSpace: 'nowrap' }}
              >
                {getAddButtonText()}
              </Button>
            </Box>
          )}

          {tab === 0 && (
            <Typography>Conteúdo da Visão Geral (ex: resumo, KPIs, alertas...)</Typography>
          )}
          {tab >= 1 && (
            <List>
              {items
                .filter((item) =>
                  tab === 1
                    ? item.tipo === 'entrada'
                    : tab === 2
                      ? item.tipo === 'saida'
                      : tab === 3
                        ? item.tipo === 'produto'
                        : false
                )
                .map((item, index) => (
                  <ListItem key={index} divider>
                    <ListItemText primary={item.nome} secondary={item.data} />
                  </ListItem>
                ))}
            </List>
          )}
        </Box>
      </Paper>
    </Box>
  )
}
