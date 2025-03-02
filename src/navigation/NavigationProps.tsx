import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from './RootStackParamList';
import RouteName from './RouteName';

export type IProductDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  RouteName.PRODUCT_DETAIL
>;
