import { App, SlashCommand, ViewResponseAction } from '@slack/bolt';
import { CompanyInfoController } from '../app/controllers/company-info-controller';
import { modalCompanyLookupView } from '../app/views/modal-company-lookup-view';

export const registerCommandCompanyInfoHandler = (app: App) => {
    app.command(
        '/company',
        async ({ command, ack, body, client, say, logger }) => {
            await ack();

            if (command.text) {
                let cic = new CompanyInfoController(logger);
                let viewBlocks = await cic.getCompanyInfoView(command.text);
                await say(viewBlocks);
            } else {
                openModal(body, client, logger);
            }
        }
    );
};

const openModal = async (body: SlashCommand, client: any, logger: any) => {
    try {
        logger.debug('Open modal: ' + body.trigger_id);

        const result = await client.views.open({
            trigger_id: body.trigger_id,
            view: modalCompanyLookupView()
        });
        logger.debug(result);
    } catch (error) {
        logger.error(error);
    }
};
