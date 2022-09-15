import { modalCompanyInfoView } from './modal-company-info-view';

export const modalCompanyLookupView = () => {
    let view = {
        type: 'modal',
        callback_id: 'companySearchSubmit',
        title: {
            type: 'plain_text',
            text: 'Company Lookup'
        },
        blocks: [
            {
                type: 'section',
                block_id: 'companyNameSelect',
                text: {
                    type: 'mrkdwn',
                    text: 'Search for a company'
                },
                accessory: {
                    action_id: 'companySearch',
                    type: 'external_select',
                    placeholder: {
                        type: 'plain_text',
                        text: 'Select an item'
                    },
                    min_query_length: 3
                }
            }
        ],
        close: {
            type: 'plain_text',
            text: 'Close'
        },
        submit: {
            type: 'plain_text',
            text: 'Lookup'
        }
    };

    return view;
};
