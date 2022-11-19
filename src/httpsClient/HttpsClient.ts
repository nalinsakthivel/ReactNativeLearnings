import axios, {Method} from 'axios';

const HttpClient = async (url: string, method: Method) => {
  // console.log('URL', url);
  // console.log('options', options);
  var options: any = {};

  options.method = method;

  console.log('URL', url);
  console.log('options', JSON.stringify(options));

  const response = axios(url, options);
  // console.log('Response >>>>>>>>>>>>>', (await response).data);
  return response;
};

export default HttpClient;
