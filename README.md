# French Festival Fetch 💃🎶

Get French festivals and the details about them :

- their themes
- their dates
- their places

## Usage

This is made with the api of data.culture.gouv.fr, https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/?lang=fr&rows=

This code will return you 50 festivals by default but if you want to find more, you can modify the parameter "rows" in the fetch URL inside the index.js file

```javascript
return await fetch(
  "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&lang=fr&facet=region&rows=50"
);
```

## Installation

Insall the package in your project

```bash
npm install enas-npm-td
```

Import the function in your js file

```javascript
const getAPI = require("enas-npm-td/index");

console.log(getAPI());
```

## Development

- `node build/index.js` - Produces local production version

- `npm run test` - Run unit test

- `npx eslint index.js` - Run to check code with EsLint
