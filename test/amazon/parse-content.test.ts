import { parseContent } from "../../src/lib/amazon/parse-content";
import { default as fs } from 'fs';
import { expect } from 'chai';


const testPage1 = fs.readFileSync('test/resource/test-amazon-gtx1050ti.html').toString();
const testPage2 = fs.readFileSync('test/resource/test-amazon-sandal.html').toString();

it('Should get decimal price and title', (done) => {
  const res = parseContent(testPage1);
  expect(res.price).to.eq(199.99, 'should parse decimal price for item');
  expect(res.name).to.eq('MSI Computer Video Card (GTX 1050 TI 4GT OC)', 'should parse title for item');
  done();
});


it('Should get ranged price', (done) => {
  const res = parseContent(testPage2);
  expect(res.range && res.range.low).to.eq(24.99, 'should parse ranged price for item');
  expect(res.range && res.range.high).to.eq(99.95, 'should parse ranged price for item');
  done();
});