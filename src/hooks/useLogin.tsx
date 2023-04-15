import {useForm} from 'react-hook-form';
import {LoginScreenProps} from '../screens/Login';
import LocalStore from '../utils/LocalStore';

const useLogin = (props: LoginScreenProps) => {
  const {handleSubmit, control, watch, setValue, setError} = useForm();

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
