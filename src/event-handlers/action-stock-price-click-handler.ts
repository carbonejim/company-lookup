import { App } from '@slack/bolt';
import { CompanyInfoController } from '../app/controllers/company-info-controller';

export const registerStockPriceClickHandler = (app: App) => {
    app.action('button_click', async ({ body, ack, say, logger }) => {
        logger.debug('Action button_click');
        await ack();

        let cic = new CompanyInfoController(logger);
        let viewBlocks = await cic.getCompanyInfoView('AAPL');
        await say(viewBlocks);
    });
};
