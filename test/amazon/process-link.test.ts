import { processLink } from "../../src/lib/amazon/process-link";
import { expect } from 'chai';

const testLink1 = 'https://www.amazon.ca/Kindle-Oasis-reader-High-Resolution-Waterproof/dp/B06XDK92KS/ref=br_msw_pdt-4/141-2883841-3259025?_encoding=UTF8&smid=A3DWYIK6Y9EEQB&pf_rd_m=A3DWYIK6Y9EEQB&pf_rd_s=&pf_rd_r=G87BXV46M2BEMZ49N612&pf_rd_t=36701&pf_rd_p=c11bd729-c20d-4918-b0c7-b2f9e7ab5c6f&pf_rd_i=desktop';

it('should retrive item code from link', async () => {
  expect(processLink(testLink1)).to.eq('B06XDK92KS');
});
