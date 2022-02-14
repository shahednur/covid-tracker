import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan 8',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Jan 9',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Jan 10',
      uv: 2000,
      pv: 4800,
      amt: 2290,
    },
    {
      name: 'Jan 11',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Jan 12',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Jan 13',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Jan 14',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


const Graph = () => {
    // const {confirmed, deaths, recovered} = totalKey;
  return (
    <div style={{ width: '100%' }}>
    <h2>Latest 7 days total</h2>
    <h4>Confirmed</h4>
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        width={500}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
    <p>Deaths</p>

    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        width={500}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="hsl(348, 86%, 61%)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
  )
}

export default Graph