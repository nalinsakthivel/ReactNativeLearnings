import {useForm} from 'react-hook-form';

const useLogin = () => {
  const {handleSubmit, control, watch, setValue, setError} = useForm();

  const onSubmit = (values: any) => {
    if (values.login) {
      console.log('value', values);
    } else {
      setError('login', {
        type: 'required',
        message: 'hello',
      });
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
