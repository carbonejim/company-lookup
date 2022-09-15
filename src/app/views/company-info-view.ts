import { CompanyInfo } from '../models/company-info';

export const companyInfoView = (companyInfo: CompanyInfo) => {
    console.log('companyInfo: ' + companyInfo);
    let companyName =
        companyInfo.name == '' ? 'Company Name' : companyInfo.name;
    let companyDescription =
        companyInfo.description == ''
            ? 'Company Description'
            : companyInfo.description;
    let companyPrice =
        companyInfo.formattedPrice == '' ? '$0.00' : companyInfo.formattedPrice;
    let view = {
        blocks: [
            {
                type: 'header',
                text: {
                    type: 'plain_text',
                    text: `${companyName}`,
                    emoji: true
                }
            },
            {
                type: 'divider'
            },
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: `${companyInfo.homepageUrl}\n${companyInfo.addressCity}, ${companyInfo.addressState}\n${companyInfo.formattedEmployeeCount} employees\n${companyInfo.ticker}: ${companyPrice} (USD as of ${companyInfo.formattedPriceDate})`
                },
                accessory: {
                    type: 'image',
                    image_url: `${companyInfo.logoUrl}`,
                    alt_text: `${companyName}`
                }
            },
            {
                type: 'context',
                elements: [
                    {
                        type: 'plain_text',
                        text: `${companyDescription}`,
                        emoji: true
                    }
                ]
            }
        ],
        text: `${companyName}`
    };

    return view;
};
