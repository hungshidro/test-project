import axios from 'axios';
import {IProductData} from 'interfaces';
import {navigate} from 'navigation';
import RouteName from 'navigation/RouteName';
import {useCallback, useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {
  addProductToCart,
  setLoading,
  setProductData,
  useAppDispatch,
  useAppSelector,
} from 'reduxs';

export const useHomeScreen = () => {
  const {products} = useAppSelector(state => state.product);
  const dispatch = useAppDispatch();

  const fetchProducts = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const listProduct = await axios.get<any>(
        'https://fakestoreapi.com/products',
      );
      console.log('listProduct', listProduct);
      dispatch(setProductData(listProduct.data));
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message,
      });
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const onClickProduct = useCallback((product: IProductData) => {
    navigate(RouteName.PRODUCT_DETAIL, {product});
  }, []);

  const onAddToCart = useCallback(
    (product: IProductData) => {
      dispatch(addProductToCart(product));
    },
    [dispatch],
  );

  const goToCart = useCallback(() => {
    navigate(RouteName.CART);
  }, []);

  return {
    products,
    onAddToCart,
    onClickProduct,
    goToCart,
  };
};
