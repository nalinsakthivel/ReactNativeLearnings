import axios, {Method, AxiosRequestConfig} from 'axios';
class HttpClientProps {
  url!: string;
  method!: Method;
  data?: any;
}
export const HttpClient = async (props: HttpClientProps): Promise<any> => {
  var options: AxiosRequestConfig = {};

  // const token = await getAuthToken();
  // if (token !== '') {
  //   options.headers = {Authorization: 'Bearer ' + token};
  // }

  options.method = props.method;
  if (props.data) {
    options.data = props.data;
  }

  //let url = ApiConstant.BASE_URL + props.url;
  // let baseURI = await getAppURL();

  let url = props.url;
  console.log('>>>>>>>>>url', url, options);

  const response = axios(url, options).catch(e => {
    console.log('>>>>>e>>', e);
    throw e;
  });

  return response;
};

export default HttpClient;
