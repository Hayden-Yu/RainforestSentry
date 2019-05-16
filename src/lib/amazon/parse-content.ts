import { default as cheerio } from 'cheerio';
import { product } from '.';

export const parseContent = (content: string): product => {
  const $ = cheerio.load(content);
  let onDeal = true;

  let priceTxt = $('#priceblock_dealprice').text();
  if (!priceTxt) {
    onDeal = false;
    priceTxt = $('#priceblock_ourprice').text();
  }

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
    name: $('#titleSection').text().trim().replace(/\s+/g, ' '),
    price: price,
    range: range,
    deal: onDeal,
  }
} 
