import { Logger } from '@slack/bolt';
import { companyInfoView } from '../views/company-info-view';
import { CompanyInfo } from '../models/company-info';
import { getCompanyInfo } from '../services/company-info-service';
import { CompanyStockPrice } from '../models/company-stock-price';
import { getStockPrice } from '../services/company-stock-price-service';
import { searchCompany } from '../services/company-search-service';
import { CompanySearchResult } from '../models/company-search-result';
import { companySearchResultView } from '../views/company-search-result-view';

export class CompanyInfoController {
    constructor(logger: Logger) {
        this._logger = logger;

        process.env.SLACK_SIGNING_SECRET;
    }
    private _logger: Logger;

    async getCompanyInfoView(ticker: string) {
        let companyInfo: CompanyInfo = await getCompanyInfo(
            this._logger,
            ticker
        );
        let stockPrice: CompanyStockPrice = await getStockPrice(
            this._logger,
            ticker
        );
        companyInfo.price = stockPrice.price;
        companyInfo.priceDate = stockPrice.priceDate;
        companyInfo.ticker = stockPrice.ticker;

        let blocks = companyInfoView(await this.getCompanyInfoData(ticker));

        return blocks;
    }

    async getCompanyInfoData(ticker: string): Promise<CompanyInfo> {
        let companyInfo: CompanyInfo = await getCompanyInfo(
            this._logger,
            ticker
        );
        let stockPrice: CompanyStockPrice = await getStockPrice(
            this._logger,
            ticker
        );
        companyInfo.price = stockPrice.price;
        companyInfo.priceDate = stockPrice.priceDate;
        companyInfo.ticker = stockPrice.ticker;
        return companyInfo;
    }

    async searchCompany(searchTerm: string) {
        let companies: CompanySearchResult[] = await searchCompany(
            this._logger,
            searchTerm
        );

        return companySearchResultView(companies);
    }
}
