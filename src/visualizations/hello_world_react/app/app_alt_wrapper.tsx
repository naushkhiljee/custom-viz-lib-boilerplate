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
    series: { data: number[] }[]
  } = {
    chart: { type: 'spline' },
    title: { text: 'Naush Highchart Line' },
    series: [
      { data: data.map((int) => int['aircraft.year_built'].value) },
    ],
  };
  if (!data || !queryResponse) return (<div>No Data</div>);
  return (
    <div>
      <p>{options.title.text}</p>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default App;
