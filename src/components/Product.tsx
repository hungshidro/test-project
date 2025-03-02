import {IProductData} from 'interfaces';
import React from 'react';
import {
  DimensionValue,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  Dimensions,
} from 'react-native';

const appWidth = Dimensions.get('window').width;

export interface IProductProps {
  product: IProductData;
  width?: DimensionValue;
  onPress?: (product: IProductData) => void;
  onAddToCart?: (product: IProductData) => void;
  style?: StyleProp<ViewStyle>;
}

export const Product = (props: IProductProps) => {
  const {product, onPress, onAddToCart, style, width} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress?.(product)}
      style={[styles.container, !!width && {width}, style]}>
      <Image source={{uri: product?.image}} style={[styles.image]} />
      <Text numberOfLines={2} style={styles.title}>
        {product?.title}
      </Text>
      <View style={styles.priceRow} />
      <View style={styles.space} />
      <Text style={styles.price}>${product?.price}</Text>
      <TouchableOpacity
        onPress={() => onAddToCart?.(product)}
        style={styles.button}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
      {/* Product Image */}
      {/* Product Title */}
      {/* Product Price */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: appWidth / 2 - 24,
    height: 280,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
  },
  space: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 80,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    lineHeight: 20,
    height: 40,
  },
  price: {
    fontSize: 14,
    color: '#1b71aa',
    marginTop: 4,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1b71aa',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginTop: 8,
  },
  addToCartText: {
    color: 'white',
  },
  ratingRow: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  rate: {
    fontSize: 14,
    color: '#de8559',
  },
  rateIcon: {
    width: 24,
    height: 24,
  },
});
