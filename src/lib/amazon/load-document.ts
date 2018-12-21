import fetch from 'node-fetch';
const fakeAgent = require('fake-useragent');

export const loadDocument = async (code: string) => 
  await fetch(`https://www.amazon.ca/dp/${code}`, {headers: { 'User-Agent': fakeAgent() }}).then(res => res.text());
