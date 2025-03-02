import {Images} from 'assets/images';
import {IProductData} from 'interfaces';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface IProductInfoProps {
  product: IProductData;
}

export const ProductInfo = ({product}: IProductInfoProps) => {
  const renderInfo = (title: string, value: string) => {
    return (
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    );
  };

  const renderRating = () => {
    return (
      <View style={styles.ratingRow}>
        <Text style={styles.value}>{product.rating.rate}</Text>
        {new Array(5).fill(0).map((_, index) => (
          <Image key={index} source={Images.StarIcon} style={styles.rateIcon} />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.productName}>
        {product.title}
      </Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      {renderRating()}
      {renderInfo('Category', product.category)}
      {renderInfo('Description', product.description)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  productPrice: {
    fontSize: 16,
    color: '#1b71aa',
  },
  info: {
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  value: {
    fontSize: 14,
    color: '#393838',
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
