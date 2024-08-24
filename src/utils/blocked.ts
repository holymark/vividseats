export default function (url: string) {
    return url.includes("/blocked")
}

export function isVividseats(url: string): boolean {
    const regex = /^https:\/\/www\.vividseats\.com\//;
    return regex.test(url);
  }
  
  export const __next_data__ = ($: any) => {
    const script = $("#__NEXT_DATA__").text();
  
    return script ? JSON.parse(script) : null;
  };


  export const flattenURLs = (
    categoryObj: any
  ): { url: string; subcategory: string }[] => {
    const urls: { url: string; subcategory: string }[] = [];
    const extractURLs = (value: any, subcategory: string) => {
      if (typeof value === "string") {
        urls.push({ url: value, subcategory });
      } else if (Array.isArray(value)) {
        value.forEach((url) => extractURLs(url, subcategory));
      } else if (typeof value === "object") {
        Object.entries(value).forEach(([key, val]) => extractURLs(val, key));
      }
    };
    Object.entries(categoryObj).forEach(([key, val]) => extractURLs(val, key));
    return urls;
  };