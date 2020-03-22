import axios from 'axios';
// import http from 'http';

enum HttpMethods {
  GET = 'get',
  POST = 'post',
}

export default function createFormRequestService(baseURL: string) {
  const transport = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  // const postNew = (path: string, payload?: Object) => {
  //   const options = {
  //     path,
  //     hostname: baseURL,
  //     port: 8000,
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //   };

  //   // @ts-ignore
  //   const data = new URLSearchParams(payload);
  //   return new Promise((resolve, reject) => {
  //     const req = http.request(options, res => {
  //       console.log(`statusCode: ${res.statusCode}`);
  //       let body = '';
  //       res.on('data', d => {
  //         body += d.toString();
  //       });

  //       res.on('end', () => {
  //         console.log('bory', body);
  //         resolve(body);
  //       });
  //       res.on('error', reject);
  //     });

  //     req.write(data);
  //     req.end();
  //   });
  // };

  const request = (method: HttpMethods) => async (path: string, payload?: Object) => {
    // @ts-ignore
    const params = new URLSearchParams(payload);
    if (process.env.PYLOADJS_DEBUG) console.log(method, path, params);
    // @ts-ignore
    const { data } = await transport[method](path, params);
    return data;
  };

  return {
    post: request(HttpMethods.POST),
    // postNew,
  };
}
