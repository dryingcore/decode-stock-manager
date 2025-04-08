import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'

const COLORS = ['#4caf50', '#f44336', '#2196f3', '#ff9800']

interface Props {
  data: { name: string; value: number }[]
}

const PiePorCategoria: React.FC<Props> = ({ data }) => (
  <Card>
    <CardContent>
      <Typography variant="subtitle1">Por Categoria</Typography>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} label>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
)

export default PiePorCategoria
