import {useState} from 'react';

import ApiConstants from '../httpsClient/ApiConstants';
import HttpClient from '../httpsClient/HttpsClient';
import i18n from '../i18n';
import {ProductPodt} from '../viewmodel/HomeViewModel';
import {HomeScreenProps} from '../screens/HomeScreen';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React from 'react';
import useAuthStore from '../zustand/Store';
import {readAllUsers} from '../database/DBHelper';

export const useHome = (props: HomeScreenProps) => {
  const navigation = useNavigation();

  const {accessToken} = useAuthStore();
  console.log('accessToken :>> ', accessToken);

  const [language, setLanguage] = useState('tn');
  const [product, setProduct] = useState<ProductPodt[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      i18n.changeLanguage(language).then(() => {});
      init();
    }, [language]),
  );

  const init = async () => {
    await onProductGet();
    await readData();
  };

  const readData = () => {
    readAllUsers()
      .then(res => {
        console.log('res :>> ', res);
      })
      .catch(e => {
        console.log('e :>> ', e);
      });
  };

  const onProductGet = async () => {
    const Url: string = ApiConstants.BASE_URL + ApiConstants.PRODUCT_LIST;
    const res = await HttpClient({url: Url, method: 'GET'});
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
    navigation,
    setLanguage,
  };
};
