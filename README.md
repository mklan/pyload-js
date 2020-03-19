# pyload-js

nodejs wrapper for the pyload api

## install

`npm install pyload-js`

## api

`addPackage`

`statusDownloads`

## example

```javascript
const PyloadJs = require('pyload-js').default;

const pyload = await PyloadJs('https://my-pyload.srv', {
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
