import { ProxyConfigurationOptions } from "crawlee";

export interface InputModel {
    startUrls: string[];
    maxRequestsPerCrawl: number;
    proxyConfiguration: ProxyConfigurationOptions;
}

type Date_ = {
    localDate: string;
    utcDate: string;
    onsaleDate: string;
    presaleDate: string;
};

type Prices = {
    minPrice: string | number;
    maxPrice: string | number;
    avgPrice: string | number;
    medianPrice: string | number;
};
export interface OutputModel {
    path: string;
    id: string; // Or number, depending on the type of 'id'
    title: string;
    url: string;
    _category: string;
    _subcategory: string;
    event_category_type?: string; // Optional
    event_description?: string; // Optional if you want to include it
    venue: string;
    ticketCount: number;
    date: Date_;
    dateTbd: boolean | string,
    timeTbd: boolean | string,
    category: string;
    listingCount: number,
    ifNecessary: boolean | string,
    organicUrl: string,
    webPath: string,
    remainingText: string;
    prices: Prices;
}
