import { Logger } from '@slack/bolt';

export const getCompanyInfoAPIKey = (logger: Logger) => {
    let key: string | undefined = '';

    try {
        if (process.env.COMPANY_INFO_API_KEY == undefined) {
            logger.error(
                'Error fetchgin company info API key from environment variables.'
            );
        }
        key = process.env.COMPANY_INFO_API_KEY;
    } catch (e) {
        logger.error(
            'Error fetchgin company info API key from environment variables.'
        );
    }

    return key;
};
