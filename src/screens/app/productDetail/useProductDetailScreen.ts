import {IProductDetailScreenProps} from 'navigation/NavigationProps';
import React from 'react';
import {Animated} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {addProductToCart, useAppDispatch} from 'reduxs';

export const useProductDetailScreen = (props: IProductDetailScreenProps) => {
  const {route} = props;
  const {product} = route.params ?? {};
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();

  const animatedValue = React.useRef(new Animated.Value(0)).current;
  // const listAnimated = React.useRef<Animated.Value[]>([]).current;

  const onAddToCart = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      //reset animation
      dispatch(addProductToCart(product));
      animatedValue.setValue(0);
    });
  };

  return {
    insets,
    onAddToCart,
    product,
    animatedValue,
  };
};
