import axios, {Method} from 'axios';

const HttpClient = async (url: string, method: Method, data: any) => {
  var options: any = {};

  options.method = method;
  options.data = data;

  console.log('URL', url);
  console.log('options', JSON.stringify(options));

  const response = await axios(url, options);
  return response;
};

export default HttpClient;
