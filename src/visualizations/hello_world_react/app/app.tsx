import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import type { VisData, VisQueryResponse, VisConfig } from '../../../types/looker';

export interface AppProps {
  data: VisData
  config?: VisConfig
  queryResponse: VisQueryResponse
}

const App = ({ data, queryResponse }: AppProps): React.FC => {
  const options: {
    chart: { type: string },
    title: { text: string },
    xAxis: {
      title: {
        enabled: boolean,
        text: string
      },
      startOnTick: boolean,
      endOnTick: boolean,
      showLastLabel: boolean
    },
    yAxis: {
      title: {
        enabled: boolean,
        text: string
      },
      startOnTick: boolean,
      endOnTick: boolean,
      showLastLabel: boolean
    },
    series: { name: string, color: string, data: number[][] }[]
  } = {
    chart: { type: 'scatter' },
    title: { text: 'Naush Airplane Count by Year Built Scatter' },
    xAxis: {
      title: {
        enabled: true,
        text: 'Year',
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
    },
    yAxis: {
      title: {
        enabled: true,
        text: 'Count',
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
    },
    series: [
      {
        name: 'data from visualization api',
        color: 'rgba(223, 83, 83, .5)',
        data: data.map((int) => [int['aircraft.year_built'].value, int['aircraft.count'].value]).filter((int) => int[0]),
      },
    ],
  };
  if (!data || !queryResponse) return (<div>No Data</div>);
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default App;
