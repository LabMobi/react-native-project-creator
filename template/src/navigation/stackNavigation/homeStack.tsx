import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/homeScreen';
import {ScreenNames} from '../screens';
import {RootStackParamsList, ScreenType} from '../../utils/types/routes';
import {useTheme} from '@react-navigation/native';
// import QRScreen from '../../screens/qr/qrScreen';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const HomeStack = () => {
  const {colors} = useTheme();

  const screens: ScreenType[] = [
    {
      name: ScreenNames.HOME,
      component: HomeScreen,
    },
    // {
    //   name: ScreenNames.QR,
    //   component: QRScreen,
    // },
  ];
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.darkBlue,
        headerBackTitleVisible: false,
      }}>
      {screens.map(screenOptions => {
        return <Stack.Screen key={screenOptions.name} {...screenOptions} />;
      })}
    </Stack.Navigator>
  );
};

export default HomeStack;
