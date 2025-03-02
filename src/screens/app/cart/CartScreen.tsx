import React from 'react';
import {useCartScreen} from './useCartScreen.hook';
import {FlatList, StyleSheet, View} from 'react-native';
import {ICartProduct} from 'interfaces';
import {AppHeader} from 'components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CartItem} from './components';

export const CartScreen = () => {
  const {cartProducts, onRemove, onMinus, onPlus} = useCartScreen();
  const insets = useSafeAreaInsets();

  const renderItems = ({item}: {item: ICartProduct}) => {
    return (
      <CartItem
        key={item.id}
        product={item}
        onRemove={() => onRemove(item.id)}
        onMinus={() => onMinus(item.id, item.quantity)}
        onPlus={() => onPlus(item.id, item.quantity)}
      />
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
          paddingTop: insets.top + 48,
        },
      ]}>
      <AppHeader title="Cart" />
      <FlatList
        data={cartProducts}
        renderItem={renderItems}
        keyExtractor={item => item.id?.toString?.()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  list: {
    gap: 16,
  },
});
