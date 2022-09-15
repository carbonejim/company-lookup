import { App } from '@slack/bolt';
import { registerRequestCompanyInfoHandler } from './message-request-company-handler';
import { registerStockPriceClickHandler } from './action-stock-price-click-handler';
import { registerCommandCompanyInfoHandler } from './command-company-information';
import { registerOptionCompanySearchHandler } from './option-company-search-handler';
import { registerCompanyLookupModalHandler } from './view-company-lookup-modal-handler';
import { registerCompanySearchHandler } from './action-company-search-handler';

export const registerEventHandlers = (app: App) => {
    registerCommandCompanyInfoHandler(app);
    registerRequestCompanyInfoHandler(app);
    registerStockPriceClickHandler(app);
    registerOptionCompanySearchHandler(app);
    registerCompanyLookupModalHandler(app);
    registerCompanySearchHandler(app);
};
