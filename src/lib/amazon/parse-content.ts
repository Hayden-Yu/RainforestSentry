import { default as cheerio } from 'cheerio';

export const parseContent = (content: string) => {
  const $ = cheerio.load(content);
  
  const priceTxt = $('#priceblock_ourprice').text();

  let price;
  let range;

  let raw = priceTxt.split('-');
  if (raw.length === 2) { // 'CDN$ 22.99 - CDN$ 31.99'
    range = {
      low: Number(raw[0].replace(/\D*/, '')),
      high: Number(raw[1].replace(/\D*/, ''))
    };
  } else if (raw.length === 1) {
    price = Number(raw[0].replace(/\D*/, ''));
  }
  
  return {
    name: $('#titleSection').text().trim(),
    price: price,
    range: range,
  }
} 
