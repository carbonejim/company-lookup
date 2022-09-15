import { Option } from '@slack/bolt';
import { CompanySearchResult } from '../models/company-search-result';

export const companySearchResultView = (
    companies: CompanySearchResult[]
): Option[] => {
    let options: Option[] = [];

    console.log('Building search result view');

    try {
        companies.forEach((element: any) => {
            options.push({
                text: { type: 'plain_text', text: element.name },
                value: element.ticker
            });
        });
    } catch (e) {
        console.log('Error building search result view. ' + e);
    } finally {
        console.log(
            'Search result view contains ' + options.length + ' companies.'
        );
    }

    return options;
};
