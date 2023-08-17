import {useForm} from 'react-hook-form';
import {LoginScreenProps} from '../screens/LoginScreen';
import LocalStore from '../utils/LocalStore';
import useAuthStore from '../zustand/Store';
import {insertSQL} from '../database/DBHelper';

const useLogin = (props: LoginScreenProps) => {
  const {handleSubmit, control, watch, setValue, setError} = useForm();

  const {setAccessToken} = useAuthStore();

  const onSubmit = async (values: any) => {
    if (values.userName) {
      console.log('value', values);
    } else {
      setError('userName', {
        type: 'required',
        message: 'Please enter valid username',
      });
    }
    if (values.password) {
      console.log('value', values);
    } else {
      setError('password', {
        type: 'required',
        message: 'Please enter valid password',
      });
    }
    if (values.userName && values.password) {
      insertSQL(values);
      setAccessToken(values.userName);
      await LocalStore.setAuthToken(values.userName);
      props.navigation.navigate('HomeScreen');
    }
  };

  return {
    control,
    handleSubmit,
    watch,
    setValue,
    onSubmit,
  };
};

export default useLogin;
