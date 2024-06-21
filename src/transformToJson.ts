import { DefaultRuleGroupType } from 'react-querybuilder';
import { formatQuery } from 'react-querybuilder/dist/formatQuery.js';
import { parseJsonLogic } from 'react-querybuilder/dist/parseJsonLogic.js';

const transformToJSON = (expression: any): string => {
    try {
        const ruleGroupType: DefaultRuleGroupType = parseJsonLogic(expression);
        const jsonResult: string = formatQuery(ruleGroupType, 'json');
        return jsonResult;
    }
    catch (e) {
        console.error(`Error while parsing JsonLogic expression - ${e}`);
        throw new Error('Invalid JsonLogic expression');
    }
};

export default transformToJSON;