import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import AppNavigation from './src/navigation';
import './src/localization/i18n.config';
import Wrapper from './src/views/wrapper/wrapper';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppNavigation />
      <Wrapper />
    </Provider>
  );
};

export default App;
