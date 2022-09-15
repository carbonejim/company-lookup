import { ModalView } from '@slack/bolt';
import { CompanyInfo } from '../models/company-info';

export const modalCompanyInfoView = (companyInfoData: CompanyInfo) => {
    let vm: ModalView = {
        type: 'modal',
        title: {
            type: 'plain_text',
            text: 'Company Information'
        },
        blocks: [
            {
                type: 'header',
                text: {
                    type: 'plain_text',
                    text: `${companyInfoData.name}`,
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
                    text: `${companyInfoData.homepageUrl}\n${companyInfoData.addressCity}, ${companyInfoData.addressState}\n${companyInfoData.formattedEmployeeCount} employees\n${companyInfoData.ticker}: $${companyInfoData.price} (USD as of ${companyInfoData.formattedPriceDate})`
                },
                accessory: {
                    type: 'image',
                    image_url: `${companyInfoData.logoUrl}`,
                    alt_text: `${companyInfoData.name}`
                }
            },
            {
                type: 'context',
                elements: [
                    {
                        type: 'plain_text',
                        text: `${companyInfoData.description}`,
                        emoji: true
                    }
                ]
            }
        ]
    };
    return vm;
};
