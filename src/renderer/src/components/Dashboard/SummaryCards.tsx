import React from 'react'
import { Card, CardContent, Typography, Grid } from '@mui/material'

interface SummaryCardsProps {
  totalEntradas: number
  totalSaidas: number
}

const SummaryCards: React.FC<SummaryCardsProps> = ({ totalEntradas, totalSaidas }) => {
  const saldo = totalEntradas - totalSaidas

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ mb: 2 }}>
      <Grid>
        <Card>
          <CardContent>
            <Typography variant="h6">Entradas</Typography>
            <Typography variant="h4" color="success.main">+{totalEntradas}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid>
        <Card>
          <CardContent>
            <Typography variant="h6">Saídas</Typography>
            <Typography variant="h4" color="error.main">-{totalSaidas}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid>
        <Card>
          <CardContent>
            <Typography variant="h6">Saldo Atual</Typography>
            <Typography variant="h4" color="primary">{saldo}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SummaryCards
