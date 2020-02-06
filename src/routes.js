import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home/index';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
  }),
);

export default Routes;