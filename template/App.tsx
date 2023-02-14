import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import AppNavigation from './src/navigation';
import './src/localization/i18n.config';
import Wrapper from './src/views/wrapper/wrapper';
import {
  GlobalAlertModal,
  globalAlertModalRef,
} from './src/hooks/globalAlertModal';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <GlobalAlertModal ref={globalAlertModalRef} />
      <AppNavigation />
      <Wrapper />
    </Provider>
  );
};

export default App;
