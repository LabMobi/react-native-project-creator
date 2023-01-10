import {TabNames} from './../../navigation/tabs';
import {ScreenNames} from '../../navigation/screens';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {IconTypes} from './icon';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {DetailScreenProps} from './screens/detail';

export type RootStackParamsList = {
  [ScreenNames.HOME]: undefined;
  [ScreenNames.DETAIL]: DetailScreenProps;
};

export type ScreenType = {
  name: ScreenNames;
  component: (routeParams: any) => JSX.Element;
  options?: NativeStackNavigationOptions;
};

export type TabType = {
  name: TabNames;
  component: (routeParams: any) => JSX.Element;
  tabTitle?: string;
  options?: BottomTabNavigationOptions;
  icon: IconTypes;
};
