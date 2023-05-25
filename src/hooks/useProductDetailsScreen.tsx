import {ProductDetailsScreenProps} from '../screens/ProductDetailsScreen';

export const useProductDetailsScreen = (props: ProductDetailsScreenProps) => {
  const id = props.route.params.data;

  console.log('id', id);

  return {
    id,
  };
};
