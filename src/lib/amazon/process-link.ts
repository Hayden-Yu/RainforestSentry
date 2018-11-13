
// unique code in product link appears to follow a /dp/ sub-path, e.g. https://www.amazon.ca/Kindle-Oasis-reader-High-Resolution-Waterproof/dp/B06XDK92KS/
export const processLink = (link: string): string => {
  let path = link.split('/');
  let dp = false;
  for (let el of path) {
    if (dp) {
      return el;
    }
    if (el === 'dp') {
      dp = true;
    }
  }
  return '';
}