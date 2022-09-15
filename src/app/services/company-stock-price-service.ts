import { CompanyStockPrice } from '../models/company-stock-price';
const fetch = require('node-fetch');
import { Logger } from '@slack/bolt';
import { getCompanyInfoAPIKey } from '../services/global-variable-service';

export const getStockPrice = async (logger: Logger, ticker: string) => {
    let companyStockPrice = new CompanyStockPrice();

    try {
        let response = await fetch(
            'https://api.polygon.io/v2/aggs/ticker/' +
                ticker +
                '/range/1/day/2022-09-02/2022-09-09?adjusted=true&sort=desc&limit=120&apiKey=' +
                getCompanyInfoAPIKey(logger)
        );

        let res = await response.json();
        companyStockPrice.ticker = res.ticker;
        companyStockPrice.price = res.results[0].c;
        companyStockPrice.priceDate = res.results[0].t;
    } catch (e) {
        console.log('Error fetching company info: ' + e);
    }

    return companyStockPrice;
};
