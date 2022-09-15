import { App, BlockSuggestion, Option } from '@slack/bolt';
import { CompanyInfoController } from '../app/controllers/company-info-controller';

export const registerOptionCompanySearchHandler = (app: App) => {
    app.options('companySearch', async ({ options, ack, body, logger }) => {
        logger.debug('Option companySearch: ' + body.value);

        let cic = new CompanyInfoController(logger);
        let updatedOptions = await cic.searchCompany(body.value);

        if (updatedOptions) {
            logger.debug(
                'Company Search Options 2' + JSON.stringify(updatedOptions)
            );

            let options: Option[] = [];
            updatedOptions.forEach((element) => {
                logger.debug(element);
                options.push(element);
            });
            await ack({ options: options });
        } else {
            ack();
        }
    });
};
