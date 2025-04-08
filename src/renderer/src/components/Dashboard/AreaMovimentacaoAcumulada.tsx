import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip
} from 'recharts'

interface Props {
  data: { name: string; entradas: number; saidas: number }[]
}

const AreaMovimentacaoAcumulada: React.FC<Props> = ({ data }) => (
  <Card>
    <CardContent>
      <Typography variant="subtitle1">Movimentação Acumulada</Typography>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorEntradas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4caf50" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4caf50" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorSaidas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f44336" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f44336" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="entradas"
            stroke="#4caf50"
            fillOpacity={1}
            fill="url(#colorEntradas)"
          />
          <Area
            type="monotone"
            dataKey="saidas"
            stroke="#f44336"
            fillOpacity={1}
            fill="url(#colorSaidas)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
)

export default AreaMovimentacaoAcumulada
