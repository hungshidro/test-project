import {
  IHomeScreenParams,
  IProductDetailScreenParams,
  //NEW ROUTE PARAMS HERE
} from './NavigationParams';
import RouteName from './RouteName';

type RootStackParamList = {
  [RouteName.HOME]: IHomeScreenParams;
  [RouteName.PRODUCT_DETAIL]: IProductDetailScreenParams;
  //NEW ROUTE STACK HERE
};

export default RootStackParamList;
