import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';


export default function Chart({ data }) {
  return (
    <BarChart width={1000} height={250} data={data} style={{margin: "0 auto"}}>
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="amount" fill="#31BAE0" />
      <Bar dataKey="amount" fill="#F4AD13" />
    </BarChart>
  );
}
