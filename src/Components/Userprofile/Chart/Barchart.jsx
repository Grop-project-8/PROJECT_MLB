import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const chartSetting = {
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};

const dataset = [
  {
    YOGA: 59,
    JUMPPINGROPE: 57,
    BODYWEIGHT: 86,
    PELATIST: 21,
    month: 'Mon',
  },
  {
    YOGA: 50,
    JUMPPINGROPE: 52,
    BODYWEIGHT : 78,
    PELATIST: 28,
    month: 'Tue',
  },
  {
    YOGA: 47,
    JUMPPINGROPE: 53,
    BODYWEIGHT: 106,
    PELATIST: 41,
    month: 'Wed',
  },
  {
    YOGA: 54,
    JUMPPINGROPE: 56,
    BODYWEIGHT: 92,
    PELATIST: 73,
    month: 'Thu',
  },
  {
    YOGA: 57,
    JUMPPINGROPE: 69,
    BODYWEIGHT: 92,
    PELATIST: 99,
    month: 'Fri',
  },
  {
    YOGA: 60,
    JUMPPINGROPE: 63,
    BODYWEIGHT: 103,
    PELATIST: 144,
    month: 'Sat',
  },
  {
    YOGA: 59,
    JUMPPINGROPE: 60,
    BODYWEIGHT: 105,
    PELATIST: 319,
    month: 'Sun',
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function BarsDataset() {
  return (
    <div className='w-[20rem] mx-auto sm:w-[30rem] md:w-[40rem]'>
      <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'YOGA', label: 'YOGA', valueFormatter },
        { dataKey: 'JUMPPINGROPE', label: 'JUMPPINGROPE', valueFormatter },
        { dataKey: 'PELATIST', label: 'PELATIST', valueFormatter },
        { dataKey: 'BODYWEIGHT', label: 'BODYWEIGHT', valueFormatter },
      ]}
      {...chartSetting}
    />
    </div>
  );
}