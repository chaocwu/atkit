"use client"

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';

const data = [
  {
    name: '1',
    通过率: 90,
  },
  {
    name: '2',
    通过率: 30,
  },
  {
    name: '3',
    通过率: 80,
  },
  {
    name: '4',
    通过率: 80,
  },
  {
    name: '5',
    通过率: 60,
  },
  {
    name: '6',
    通过率: 90,
  },
  {
    name: '7',
    通过率: 90,
  }
];

export default function Trending() {
  return (
    <ResponsiveContainer width="100%" className="xl:min-h-[260px] 2xl:min-h-[490px]">
      <AreaChart data={data}>
        <XAxis allowDataOverflow dataKey="name" tickLine={false} axisLine={false} fontSize={10} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="通过率" stroke="#adfa1d" fill="#adfa1d" />
      </AreaChart>
    </ResponsiveContainer >
  );
}
