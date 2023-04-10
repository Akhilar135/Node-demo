const url=  require('url');

const sampleURL = new URL('https://laas.makemylabs.in/myLabs');

console.log(sampleURL.href);
console.log(sampleURL.host);
console.log(sampleURL.port);
console.log(sampleURL.searchParams);