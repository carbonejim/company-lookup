import { CompanySearchResult } from '../models/company-search-result';
import { Logger } from '@slack/bolt';
import { getCompanyInfoAPIKey } from '../services/global-variable-service';
const fetch = require('node-fetch');

export const searchCompany = async (logger: Logger, nameOrTicker: string) => {
    let companySearchResults: CompanySearchResult[] = [];

    try {
        let response = await fetch(
            'https://api.polygon.io/v3/reference/tickers?market=stocks&search=' +
                nameOrTicker +
                '&active=true&sort=ticker&order=asc&limit=50&apiKey=' +
                getCompanyInfoAPIKey(logger)
        );

        let res = await response.json();

        console.log(res);

        res.results.forEach((element: any) => {
            let item = new CompanySearchResult();
            item.name = element.name;
            item.ticker = element.ticker;
            companySearchResults.push(item);
        });
    } catch (e) {
        console.log('Error searching for companies: ' + e);
    }

    return companySearchResults;
};
