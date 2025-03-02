import {
  removeProductFormCart,
  updateCartQuantity,
  useAppDispatch,
  useAppSelector,
} from 'reduxs';

export const useCartScreen = () => {
  const {cartProducts} = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const onRemove = (id: number) => {
    dispatch(removeProductFormCart(id));
  };

  const onMinus = (id: number, quantity: number) => {
    if (quantity > 1) {
      dispatch(updateCartQuantity({id, quantity: quantity - 1}));
    } else {
      dispatch(removeProductFormCart(id));
    }
  };

  const onPlus = (id: number, quantity: number) => {
    dispatch(updateCartQuantity({id, quantity: quantity + 1}));
  };

  return {
    cartProducts,
    onRemove,
    onPlus,
    onMinus,
  };
};
