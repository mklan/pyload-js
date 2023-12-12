# pyload-js

NodeJS wrapper for the pyload api

## Install

`npm install pyload-js`


## Usage

```javascript
import pyloadJS from 'pyload-js';

const pyloadApi = await pyloadJS.create('https://my-pyload.srv', {
  username: 'admin',
  password: '12345678',
});

const packageId = await pyloadApi.addPackage({
  name: 'first-package',
  links: ['http://some-link.com/1.rar', 'http://some-link.com/2.rar'],
});
console.log(packageId);

const status = await pyloadApi.statusDownloads();
console.log(status);
```

## Tests

rename `.env.sample` to `.env` and change the values accordingly.

`npm test`
