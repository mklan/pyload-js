import formRequest from './form-request';

interface AddPackagePayload {
  name: string;
  links: string[];
  dest?: BigInteger;
}

type PyLoadCredentials = {
  username: string;
  password: string;
};

export type PyloadApi = {
  addPackage: (payload: AddPackagePayload) => Promise<number>
  statusDownloads: () => Promise<unknown>
  pollStatus: () => any
}

export async function create(host: string, credentials: PyLoadCredentials): Promise<PyloadApi> {
  const req = formRequest(`${host}/api/`);


  const session = await req.post('login', credentials);
  if (!session) throw new Error('login failed');

  /// api /////

  async function addPackage(payload: AddPackagePayload): Promise<number> {
    return req.post('addPackage', {
      session,
      ...payload,
      links: JSON.stringify(payload.links),
      name: JSON.stringify(payload.name),
    });

  }

  async function statusDownloads() {
    return req.post(`statusDownloads`, { session });
  }


  // TODO
  function pollStatus() {
    setInterval(async () => {
      const data = await statusDownloads();
      console.log(data);
    }, 5000);
  }

  return {
    addPackage,
    statusDownloads,
    pollStatus
  };
}
