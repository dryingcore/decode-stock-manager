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

type Produto = {
  nome: string
  quantidade: number
}

declare global {
  interface Window {
    electronAPI: {
      saveData: (data: any) => void
      loadData: () => Promise<any>
    }
  }
}
export default function StockManager() {
  const [tab, setTab] = useState(0)
  const [estoque, setEstoque] = useState<Produto[]>([])
  const [nome, setNome] = useState('')
  const [quantidade, setQuantidade] = useState<number>(0)

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue)
    setNome('')
    setQuantidade(0)
  }

  const salvarEstoque = (novos: Produto[]) => {
    setEstoque(novos)
    window.electronAPI.saveData(novos)
  }

  const handleAdd = () => {
    if (!nome || quantidade <= 0) return

    const index = estoque.findIndex((p) => p.nome.toLowerCase() === nome.toLowerCase())
    const novoEstoque = [...estoque]

    if (tab === 1) {
      // Entrada
      if (index !== -1) {
        novoEstoque[index].quantidade += quantidade
      } else {
        alert('Produto não encontrado no estoque.')
        return
      }
    } else if (tab === 2) {
      // Saída
      if (index !== -1) {
        if (novoEstoque[index].quantidade < quantidade) {
          alert('Quantidade insuficiente no estoque.')
          return
        }
        novoEstoque[index].quantidade -= quantidade
      } else {
        alert('Produto não encontrado no estoque.')
        return
      }
    } else if (tab === 3) {
      // Novo produto
      if (index !== -1) {
        alert('Produto já existe.')
        return
      }
      novoEstoque.push({ nome, quantidade })
    }

    salvarEstoque(novoEstoque)
    setNome('')
    setQuantidade(0)
  }

  const carregarDados = async () => {
    const dados = await window.electronAPI.loadData()
    if (dados) setEstoque(dados)
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
                flexDirection: 'column',
                gap: 2,
                mb: 2,
                maxWidth: 400
              }}
            >
              <TextField
                label="Nome do Produto"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                fullWidth
              />
              <TextField
                label="Quantidade"
                type="number"
                value={quantidade}
                onChange={(e) => setQuantidade(Number(e.target.value))}
                fullWidth
              />
              <Button variant="contained" startIcon={<AddIcon />} onClick={handleAdd}>
                {tab === 1
                  ? 'Adicionar Entrada'
                  : tab === 2
                    ? 'Registrar Saída'
                    : 'Adicionar Produto'}
              </Button>
            </Box>
          )}

          {tab === 0 && <Typography>Resumo e KPIs vão aqui futuramente.</Typography>}

          {tab === 3 && (
            <List>
              {estoque.map((item, index) => (
                <ListItem key={index} divider>
                  <ListItemText primary={item.nome} secondary={`Quantidade: ${item.quantidade}`} />
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Paper>
    </Box>
  )
}
