# pyload-js

nodejs wrapper for the pyload api

## install

`npm install pyload-js`

## usage

```javascript
const PyloadJs = require('pyload-js');

const pyload = await PyloadJs.create('https://my-pyload.srv', {
  username: 'admin',
  password: '12345678',
});

const packageId = await pyload.addPackage({
  name: 'first-package',
  links: ['http://some-link.com/1.rar', 'http://some-link.com/2.rar'],
});
console.log(packageId);

const status = await pyload.statusDownloads();
console.log(status);
```

## tests

rename `.env.sample` to `.env` and change the values accordingly.

`npm test`
