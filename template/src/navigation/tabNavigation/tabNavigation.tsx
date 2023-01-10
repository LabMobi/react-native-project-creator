import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack} from '../stackNavigation';
import {TabNames} from '../tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import Icon from '../../components/common/icon';

import Typography from '../../components/common/typography';
import {TabType} from '../../utils/types/routes';
import {ensure} from '../../helpers/ensure';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const {colors} = useTheme();
  const fontSize = 13;
  const getTab = (
    route: RouteProp<ParamListBase, string>,
    focused: boolean,
  ) => {
    const currentTab = ensure(tabs.find(tab => tab.name === route.name));
    const {icon, tabTitle} = currentTab;

    return currentTab ? (
      <View style={styles.iconContainer}>
        <Icon icon={icon} color={focused ? colors.darkBlue : colors.gray} />
        {focused && <Typography size={fontSize}>{tabTitle}</Typography>}
      </View>
    ) : (
      <View />
    );
    // switch (route.name) {
    //   case TabNames.HOME: {
    //     return (
    //       <View style={styles.iconContainer}>
    //         <Icon
    //           icon={'Home'}
    //           color={focused ? colors.darkBlue : colors.gray}
    //         />
    //         {focused && <Typography size={fontSize}>Home</Typography>}
    //       </View>
    //     );
    //   }
    //   case TabNames.SETTINGS: {
    //     return (
    //       <View style={styles.iconContainer}>
    //         <Icon
    //           icon={'Settings'}
    //           color={focused ? colors.darkBlue : colors.gray}
    //         />
    //         {focused && <Typography size={fontSize}>Settings</Typography>}
    //       </View>
    //     );
    //   }
    //   default:
    //     <View />;
    // }
  };

  const tabs: TabType[] = [
    {
      name: TabNames.HOME,
      component: HomeStack,
      icon: 'Home',
      tabTitle: 'Home',
    },
    // {
    //   name: TabNames.INSTALLATION,
    //   component: InstallationStack,
    //   icon: 'Installation',
    //   tabTitle: 'Installation',
    // },
    // {
    //   name: TabNames.SETTINGS,
    //   component: SettingsStack,
    //   icon: 'Settings',
    //   tabTitle: 'Settings',
    // },
  ];

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        tabBarIcon: ({focused, color, size}) => getTab(route, focused),
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.darkBlue,
        tabBarStyle: {
          backgroundColor: colors.primary,
        },
      })}>
      {tabs.map(tab => {
        return (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{...tab.options}}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // width: 80,
    // height: 80,
  },
});
