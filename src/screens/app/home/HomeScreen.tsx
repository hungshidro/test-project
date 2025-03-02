import React from 'react';
import {useHomeScreen} from './useHomeScreen.hook';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {IProductData} from 'interfaces';
import {AppHeader, Product} from 'components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Images} from 'assets/images';

export const HomeScreen = () => {
  const {products, onAddToCart, onClickProduct, goToCart} = useHomeScreen();
  const insets = useSafeAreaInsets();

  const renderItems = ({item}: {item: IProductData}) => {
    return (
      <Product
        key={item.id}
        product={item}
        onAddToCart={onAddToCart}
        onPress={onClickProduct}
      />
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
          paddingTop: insets.top,
        },
      ]}>
      <AppHeader
        returnEnabled={false}
        iconRight={<Image source={Images.Cart} style={styles.iconCart} />}
        onClickRight={goToCart}
      />
      <FlatList
        data={products}
        renderItem={renderItems}
        keyExtractor={item => item.id?.toString?.()}
        numColumns={2}
        columnWrapperStyle={styles.listColumns}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listColumns: {
    gap: 16,
  },
  list: {
    gap: 16,
    padding: 16,
  },
  iconCart: {
    width: 32,
    height: 32,
  },
});
