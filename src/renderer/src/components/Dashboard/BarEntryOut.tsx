import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from 'recharts'

interface Props {
  data: { name: string; entradas: number; saidas: number }[]
}

const BarEntradasSaidas: React.FC<Props> = ({ data }) => (
  <Card>
    <CardContent>
      <Typography variant="subtitle1">Entradas vs Saídas</Typography>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="entradas" fill="#4caf50" />
          <Bar dataKey="saidas" fill="#f44336" />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
)

export default BarEntradasSaidas
