import { App } from '@slack/bolt';

export const registerCompanySearchHandler = (app: App) => {
    app.action('companySearch', async ({ ack, logger }) => {
        logger.debug('registerCompanySearchHandler');
        await ack();
    });
};
