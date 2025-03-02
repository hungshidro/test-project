import {Images} from 'assets/images';
import {Counter} from 'components/Counter';
import {ICartProduct} from 'interfaces';
import React, {useMemo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ICartItemProps {
  product: ICartProduct;
  onRemove: () => void;
  onMinus?: () => void;
  onPlus?: () => void;
}

export const CartItem = ({
  product,
  onRemove,
  onMinus,
  onPlus,
}: ICartItemProps) => {
  const price = useMemo(
    () => product.product.price * product.quantity,
    [product.product.price, product.quantity],
  );

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.product.image}} />
      <TouchableOpacity
        style={styles.close}
        activeOpacity={0.85}
        onPress={onRemove}>
        <Image style={styles.closeIcon} source={Images.Close} />
      </TouchableOpacity>
      <View style={styles.infor}>
        <Text numberOfLines={2} style={styles.title}>
          {product.product.title}
        </Text>
        <View style={styles.rowPrice}>
          <Text style={styles.price}>${price}</Text>
          <Counter onMinus={onMinus} onPlus={onPlus} value={product.quantity} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#c0b9b9',
    height: 104,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  infor: {
    flex: 1,
    height: '100%',
    flexShrink: 1,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#1b71aa',
  },
  close: {
    position: 'absolute',
    right: 6,
    top: 6,
  },
  closeIcon: {
    width: 24,
    height: 24,
    tintColor: '#c0b9b9',
  },
  rowPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
});
