import { processLink } from "./process-link";
import { loadDocument } from "./load-document";
import { parseContent } from "./parse-content";

export type listing = {
  code: string,
  product: product,
}

export type product = {
  name: string,
  price?: number,
  range?: {
    low: number,
    high: number,
  },
  deal: boolean,
}

const getListing = async (url: string): Promise<listing> => {
  const code = processLink(url);
  const document = await loadDocument(code);
  return {
    code: code,
    product: parseContent(document)
  }
}

export default getListing;