import {IProductDetailScreenProps} from 'navigation/NavigationProps';
import React from 'react';
import {Animated, ScrollView, StyleSheet, View} from 'react-native';
import {ProductImage, ProductInfo} from './components';
import {AppHeader} from 'components';
import {CartButton} from './components/CartButton';
import {useProductDetailScreen} from './useProductDetailScreen';
import {appHeight, appWidth} from 'configs';

export const ProductDetailScreen = (props: IProductDetailScreenProps) => {
  const {onAddToCart, product, animatedValue, insets} =
    useProductDetailScreen(props);

  const top = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, appHeight - insets.bottom - insets.top - 48 * 3],
  });
  const scale = animatedValue.interpolate({
    inputRange: [0, 0.7, 1],
    outputRange: [1, 0.2, 0],
  });
  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View style={styles.container}>
      <AppHeader />
      <ScrollView>
        <ProductImage image={product.image} />
        <ProductInfo product={product} />
      </ScrollView>
      <CartButton onPress={onAddToCart} />
      <Animated.Image
        source={{uri: product.image}}
        style={[
          styles.image,
          {
            top,
            opacity,
            transform: [
              {
                scale: scale,
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: appWidth,
    height: appWidth,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});
