# French Festival Fetch 💃🎶

Get French festivals and the details about them :

- their themes
- their dates
- their places

## Want to view more festivals ?

This is made with the api of data.culture.gouv.fr, https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/?lang=fr&rows=

This code will return you 50 festivals by default but if you want to find more, you can modify the parameter "rows" in the fetch URL inside the index.js file

## Installation

```bash
npm install
```

## Development

- `node build/index.js` - Produces local production version

- `npm run test` - Run unit test

- `npx eslint index.js` - Run to check code with EsLint
