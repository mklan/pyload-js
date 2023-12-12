"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _formrequestnew = require('./form-request.new'); var _formrequestnew2 = _interopRequireDefault(_formrequestnew);
async function create(host, credentials) {
  const { post } = _formrequestnew2.default.call(void 0, `${host}/api/`);
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


exports.create = create;
