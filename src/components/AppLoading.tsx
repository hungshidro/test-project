import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useAppSelector} from 'reduxs';

export const AppLoading = () => {
  const {isLoading} = useAppSelector(state => state.app);

  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
