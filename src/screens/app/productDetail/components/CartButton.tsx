import {Images} from 'assets/images';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ICartButtonProps {
  onPress: () => void;
}

export const CartButton = ({onPress}: ICartButtonProps) => {
  const insets = useSafeAreaInsets();

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[styles.container, {bottom: insets.bottom}]}>
      <Image source={Images.Cart} style={styles.iconCart} />
      <Text style={styles.text}>Add to Cart</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 48,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4f83dc',
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
  iconCart: {
    width: 24,
    height: 24,
    tintColor: 'white',
    marginHorizontal: 8,
  },
});
