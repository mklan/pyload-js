import querystring from 'querystring';
import { join } from 'path';

export default function createFormRequestService(baseURL: string) {
  const post = async (path: string, payload?: Object) => {
    // Convert object to form-urlencoded format
    const formBody = querystring.stringify(payload);

    // API endpoint
    const url = join(baseURL, path);

    // Fetch request options
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    };

    const res = await fetch(url, requestOptions);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    console.log(res);
    console.log(await res.json());
    return res.json();
  };

  return {
    post,
  };
}
