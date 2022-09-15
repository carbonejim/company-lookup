import { App } from '@slack/bolt';
import { modalCompanyLookupView } from '../app/views/modal-company-lookup-view';

// Listens to incoming messages that contain "hello"
export const registerRequestCompanyInfoHandler = (app: App) => {
    app.message('hello', async ({ message, say, logger }) => {
        logger.debug('Message hello');
        await say(modalCompanyLookupView());
    });
};
