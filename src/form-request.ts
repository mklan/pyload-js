import { join } from 'path';

export default function createFormRequestService(baseURL: string) {
  const post = async (path: string, formData?: Record<string, any>) => {
    const formBody = new URLSearchParams(formData).toString();

    if (process.env.PYLOADJS_DEBUG) console.log('POST', path, formBody);

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

    return await res.json();
  };

  return {
    post,
  };
}
