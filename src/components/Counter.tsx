import {Images} from 'assets/images';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ICounterProps {
  value: number;
  onMinus?: () => void;
  onPlus?: () => void;
}

export const Counter = ({onMinus, onPlus, value = 0}: ICounterProps) => {
  const _onMinus = () => {
    onMinus?.();
  };

  const _onPlus = () => {
    onPlus?.();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={_onMinus}
        activeOpacity={0.8}
        style={styles.iconContainer}>
        <Image source={Images.Minus} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity
        onPress={_onPlus}
        activeOpacity={0.8}
        style={styles.iconContainer}>
        <Image source={Images.Plus} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 32,
    borderRadius: 24,
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#e0e0e0',
    gap: 8,
    padding: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
