import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';

interface IProductChartProps {
  data: any[];
}

export const ProductChart = React.memo(({ data }: IProductChartProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
        <AreaChart width={1024} height={250} data={data}
                   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="displayDate" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="mediumPrice" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" dot={true}/>
        </AreaChart>
  );
});
