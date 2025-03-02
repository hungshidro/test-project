import React from 'react';
import {Image, StyleSheet} from 'react-native';

interface IProductImageProps {
  image: string;
}

export const ProductImage = (props: IProductImageProps) => {
  const {image} = props;

  return <Image source={{uri: image}} style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 1,
  },
});
