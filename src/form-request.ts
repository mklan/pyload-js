import axios from "axios";
import qs from "qs";
import axiosCookieJarSupport from "axios-cookiejar-support";
import tough from "tough-cookie";

axiosCookieJarSupport(axios);

enum HttpMethods {
  GET = "get",
  POST = "post"
}

export default function createFormRequestService(baseURL: string) {
  const cookieJar = new tough.CookieJar();
  const transport = axios.create({
    jar: cookieJar,
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    baseURL
  });

  const request = (method: HttpMethods) => async (path: string, payload?: Object) => {
    console.log(method, path, qs.stringify(payload));
    //@ts-ignore
    const { data } = await transport[method](path, qs.stringify(payload));
    return data;
  };

  return {
    get: request(HttpMethods.GET),
    post: request(HttpMethods.POST)
  };
}
