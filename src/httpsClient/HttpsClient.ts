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

<!-- import useSWR, { mutate } from 'swr';

// Fetch the data from the API
const { data, error } = useSWR('/api/data', fetcher);

// Define a function to handle an update to the data
const handleUpdateData = async () => {
  const response = await fetch('/api/data', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ newData: 'updated data' })
  });

  if (response.ok) {
    // Update the cached data with the new data
    mutate('/api/data');
  }
};

// Render the component
return (
  <div>
    {data && <p>{data}</p>}
    <button onClick={handleUpdateData}>Update data</button>
  </div>
); -->
