interface AddPackagePayload {
    name: string;
    links: string[];
    dest?: BigInteger;
}
type PyLoadCredentials = {
    username: string;
    password: string;
};
type PyloadApi = {
    addPackage: (payload: AddPackagePayload) => Promise<number>;
    statusDownloads: () => Promise<unknown>;
};
declare function create(host: string, credentials: PyLoadCredentials): Promise<PyloadApi>;

export { type PyloadApi, create };
