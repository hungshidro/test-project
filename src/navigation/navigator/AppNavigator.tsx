import {NavigationContainer} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {navigationRef} from '../NavigationUtils';
import {MainStack} from 'navigation/stack/MainStack';

export const AppNavigator = () => {
  const onStart = useCallback(async () => {}, []);

  return (
    <NavigationContainer
      onReady={() => {
        onStart();
      }}
      ref={navigationRef}>
      <MainStack />
    </NavigationContainer>
  );
};
