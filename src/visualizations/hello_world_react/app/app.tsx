import React from 'react';
import type { VisData, VisQueryResponse, VisConfig } from '../../../types/looker';

export interface AppProps {
  data: VisData
  config?: VisConfig
  queryResponse: VisQueryResponse
}

const App = ({ data, queryResponse }: AppProps): React.FC => {
  if (!data || !queryResponse) return (<div>No Data</div>);
  return ('Hello World');
};

export default App;
