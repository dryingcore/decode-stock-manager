import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import {
  ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line
} from 'recharts'

interface Props {
  data: { name: string; total: number }[]
}

const LineHistoricoEstoque: React.FC<Props> = ({ data }) => (
  <Card>
    <CardContent>
      <Typography variant="subtitle1">Histórico de Estoque Total</Typography>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#1976d2" />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
)

export default LineHistoricoEstoque
