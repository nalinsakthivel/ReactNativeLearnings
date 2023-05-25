import {useEffect, useState} from 'react';

import ApiConstants from '../httpsClient/ApiConstants';
import HttpClient from '../httpsClient/HttpsClient';
import i18n from '../i18n';
import {ProductPodt} from '../viewmodel/HomeViewModel';
import {HomeScreenProps} from '../screens/HomeScreen';

export const useHome = (props: HomeScreenProps) => {
  const [language, setLanguage] = useState('tn');

  // console.log('lang', language);

  const [product, setProduct] = useState<ProductPodt[]>([]);

  useEffect(() => {
    i18n.changeLanguage(language).then(() => {});
    onProductGet();
  }, [language]);

  const onProductGet = async () => {
    const Url: string = ApiConstants.BASE_URL + ApiConstants.PRODUCT_LIST;
    const data = null;
    const res = await HttpClient(Url, 'GET', data);
    setProduct(res.data);
    return res.data;
  };

  const onProductPress = (id: any) => {
    props.navigation.navigate('ProductDetailsScreen', {data: id});
  };

  return {
    onProductPress,
    product,
    language,
    setLanguage,
  };
};