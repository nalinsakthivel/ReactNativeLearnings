import {useState} from 'react';

import ApiConstants from '../httpsClient/ApiConstants';
import HttpClient from '../httpsClient/HttpsClient';
import {ProductPodt} from '../viewmodel/HomeViewModel';

export const useHome = () => {
  const [product, setProduct] = useState<ProductPodt>();
  const onProductGet = async () => {
    const Url: string = ApiConstants.BASE_URL + ApiConstants.PRODUCT_LIST;
    const res = await HttpClient(Url, 'GET');
    setProduct(res.data);
    return res.data;
  };

  const onProductPress = () => {
    console.log('Hello>>>>>123');
  };
  return {onProductList: onProductGet, onProductPress, product};
};
