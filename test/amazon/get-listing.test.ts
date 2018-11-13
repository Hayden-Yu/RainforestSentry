import { expect } from 'chai';
import { default as fs } from 'fs';
import getListing from '../../src/lib/amazon';
import nock = require('nock');

const testPage1 = fs.readFileSync('test/resource/test-amazon-kindle.html').toString();

it('Should process product listing', async () => {
  const code = 'B06XDK92KS';
  const link = 'https://www.amazon.com/Kindle-Oasis-reader-High-Resolution-International/dp/' + code + 
    '/ref=sr_1_2?s=amazon-devices&ie=UTF8&qid=1542134604&sr=1-2&keywords=Kindle+oasis&dpID=51p5zhqq5mL&preST=_SY300_QL70_&dpSrc=srch';

  const server = nock('https://www.amazon.ca').get(`/dp/${code}`)
    .reply(200, testPage1);
  const result = await getListing(link);
  expect(result.code).to.eq(code);
  expect(result.product.name).to.eq('Kindle Oasis E-reader - 7" High-Resolution Display (300 ppi), Waterproof, 8 GB, Wi-Fi', 'product name');
  expect(result.product.price).to.eq(329.99, 'price');
  expect(result.product.deal).to.eq(true, 'on deal');
  server.done();
});