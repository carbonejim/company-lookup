import { App, Block, ModalView, ViewResponseAction } from '@slack/bolt';
import { CompanyInfoController } from '../app/controllers/company-info-controller';
import { CompanyInfo } from '../app/models/company-info';
import { modalCompanyInfoView } from '../app/views/modal-company-info-view';

export const registerCompanyLookupModalHandler = (app: App) => {
    app.view(
        'companySearchSubmit',
        async ({ ack, client, body, context, view, logger }) => {
            logger.debug('companySearchSubmit entry');

            const user = body['user']['id'];
            const providedValues = body.view.state.values;

            let companyNameValue = '';

            if (
                providedValues.companyNameSelect.companySearch.selected_option
            ) {
                companyNameValue =
                    providedValues.companyNameSelect.companySearch
                        .selected_option.value;
            }

            logger.debug(
                'companySearchSubmit comany ticker: ' + companyNameValue
            );

            let cic = new CompanyInfoController(logger);
            let companyInfoData: CompanyInfo = await cic.getCompanyInfoData(
                companyNameValue
            );

            ack({
                response_action: 'update',
                view: modalCompanyInfoView(companyInfoData)
            });

            logger.debug('companySearchSubmit end');
        }
    );
};
