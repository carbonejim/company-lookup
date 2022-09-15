import { CompanyInfo } from '../models/company-info';
import { Logger } from '@slack/bolt';
import { getCompanyInfoAPIKey } from '../services/global-variable-service';
const fetch = require('node-fetch');

export const getCompanyInfo = async (logger: Logger, ticker: string) => {
    logger.debug('company info service: ' + ticker);

    let companyInfo = new CompanyInfo();

    try {
        console.log('API KEY:' + getCompanyInfoAPIKey(logger));
        let response = await fetch(
            'https://api.polygon.io/v3/reference/tickers/' +
                ticker +
                '?apiKey=' +
                getCompanyInfoAPIKey(logger)
        );

        let res = await response.json();

        companyInfo.name = res.results.name;
        companyInfo.description = res.results.description;
        companyInfo.homepageUrl = res.results.homepage_url;
        companyInfo.logoUrl = res.results.branding.icon_url;

        companyInfo.addressCity = res.results.address.city;
        companyInfo.addressState = res.results.address.state;
        companyInfo.employeeCount = res.results.total_employees;
    } catch (e) {
        console.log('Error fetching company info: ' + e);
    }

    return companyInfo;
};
