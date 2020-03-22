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

export async function create(host: string, credentials: PyLoadCredentials) {
  const { post } = formRequest(`${host}/api/`);

  const session = await post('login', credentials);
  console.log(session);
  if (!session) throw new Error('login failed');

  /// api /////

  function addPackage(payload: AddPackagePayload): Promise<number> {
    return post('addPackage', {
      session,
      ...payload,
      links: JSON.stringify(payload.links),
      name: JSON.stringify(payload.name),
    });
  }

  return {
    addPackage,
    statusDownloads: () => {
      return post(`statusDownloads`, { session });
    },
  };
}

export default {
  create,
};
