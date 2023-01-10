import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {FC} from 'react';
import {LightTheme, DarkTheme} from '../theme';
import {RootState} from '../redux/store';
import {ThemeMode} from '../utils/enums/theme';
import {navigationRef} from './rootNavigation';
import TabNavigation from './tabNavigation';
// import SplashScreen from '../screens/splash/splashScreen';

const AppNavigation: FC = () => {
  const theme = useSelector((state: RootState) => state.theme);
  // const isSplashLoading = useSelector(
  //   (state: RootState) => state.appState.isSplashLoading,
  // );

  // if (isSplashLoading) {
  //   return <SplashScreen />;
  // }

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={theme.mode === ThemeMode.LIGHT ? LightTheme : DarkTheme}>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
