import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cadastro from './pages/Cadastro';
import PageInicio from './pages/PageInicio';
import Login from './pages/Login';
import { Ionicons, MaterialCommunityIcons , AntDesign } from '@expo/vector-icons';
import colors from './styles/colors';
import { color } from 'react-native-reanimated';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style:{
          height: 60,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
        },
        tabStyle:{
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle:{
          flex: 0,
          width: 0,
          height: 20,
        },
        labelStyle:{
          fontFamily:'roboto_400',
          fontSize: 11,
          marginTop: 5,
        },
        inactiveTintColor: colors.black,
        activeTintColor: colors.red,
      }}    
    >
      <Screen name="Início" component={PageInicio} options={{
          tabBarIcon: ({ size, focused }) =>{
            return (
              <MaterialCommunityIcons
                name='home-outline'
                size={size}
                color={focused ? colors.red : colors.black}
              />
            )
          }
      }} />
      <Screen name="Login" component={Login} options={{
          tabBarIcon: ({ size, focused }) =>{
            return (
              <MaterialCommunityIcons
                name='login'
                size={size}
                color={focused ? colors.red : colors.black}
              />
            )
          }
      }}/>
      <Screen name="Cadastro" component={Cadastro} options={{
          tabBarIcon: ({ size, focused }) =>{
            return (
              <AntDesign
                name='pluscircleo'
                size={size}
                color={focused ? colors.red : colors.black}
              />
            )
          }
      }}/>
    </Navigator>
  </NavigationContainer>
);

export default Routes;
