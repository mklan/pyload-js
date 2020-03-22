import { create } from '.';

const { TEST_HOST, TEST_USERNAME, TEST_PASSWORD } = process.env;

test('statusDownloads returns status array', async () => {
  const { statusDownloads } = await create(TEST_HOST || '', {
    username: TEST_USERNAME || '',
    password: TEST_PASSWORD || '',
  });
  const res = await statusDownloads();
  expect(res).toEqual([]);
});
