import React from 'react';

import Home from '@/screens/Home';
import { StatusBar } from 'react-native';

export default () => {
  return (
    <>
      <StatusBar animated barStyle="dark-content" showHideTransition="slide" />
      <Home />
    </>
  );
};
