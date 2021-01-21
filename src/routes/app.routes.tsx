import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import ScheduleAppointment from '../pages/ScheduleAppointment';
import AppointmentScheduled from '../pages/AppointmentScheduled';

import Profile from '../pages/Profile';

const App = createStackNavigator();

const AppRoutes: React.FunctionComponent = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312E38' }
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="ScheduleAppointment" component={ScheduleAppointment} />
      <App.Screen name="AppointmentScheduled" component={AppointmentScheduled} />

      <App.Screen name="Profile" component={Profile} />
    </App.Navigator>
  );
};


export default AppRoutes;
