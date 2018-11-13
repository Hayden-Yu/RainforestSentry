import fetch from 'node-fetch';

export const loadDocument = async (code: string) => 
  await fetch(`https://www.amazon.ca/dp/${code}`).then(res => res.text());
