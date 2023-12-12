import formRequest from "./form-request.new";
async function create(host, credentials) {
  const { post } = formRequest(`${host}/api/`);
  const session = await post("login", credentials);
  console.log(session);
  if (!session)
    throw new Error("login failed");
  function addPackage(payload) {
    return post("addPackage", {
      session,
      ...payload,
      links: JSON.stringify(payload.links),
      name: JSON.stringify(payload.name)
    });
  }
  return {
    addPackage,
    statusDownloads: () => {
      return post(`statusDownloads`, { session });
    }
  };
}
export {
  create
};
