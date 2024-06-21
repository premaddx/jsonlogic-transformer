import { formatQuery } from 'react-querybuilder/dist/formatQuery.js';
import { parseSQL } from 'react-querybuilder/dist/parseSQL.js';
import { OPERATOR_TO_SQL_MAPPING } from './constants.ts';

import { Rule, RuleGroup, Rules } from './types.ts';
import { DefaultRuleGroupType } from 'react-querybuilder';

export const prepareWhereClause = (rule: Rule): string => {
  const { field = '', operator = '', value = '' } = rule;
  let clause: string = field;

  switch (operator) {
    case 'in': {
      const formattedValue: string = String(value)
        .split(',')
        .map((val) => (val && !!val.trim() ? `'${val.trim()}'` : ''))
        .filter((val) => !!val)
        .join(', ');
      clause += ` ${operator} (${formattedValue})`;
      break;
    }
    case 'notIn': {
      const formattedValue: string = String(value)
        .split(',')
        .map((val) => (val && !!val.trim() ? `'${val.trim()}'` : ''))
        .filter((val) => !!val)
        .join(', ');
      clause += ` ${OPERATOR_TO_SQL_MAPPING[operator]} (${formattedValue})`;
      break;
    }
    case 'contains': {
      clause += ` ${OPERATOR_TO_SQL_MAPPING[operator]} '%${value}%'`;
      break;
    }
    case 'beginsWith': {
      clause += ` ${OPERATOR_TO_SQL_MAPPING[operator]} '${value}%'`;
      break;
    }
    case 'endsWith': {
      clause += ` ${OPERATOR_TO_SQL_MAPPING[operator]} '%${value}'`;
      break;
    }
    case 'doesNotContain': {
      clause += ` ${OPERATOR_TO_SQL_MAPPING[operator]} '%${value}%'`;
      break;
    }
    case 'doesNotBeginWith': {
      clause += ` ${OPERATOR_TO_SQL_MAPPING[operator]} '${value}%'`;
      break;
    }
    case 'doesNotEndWith': {
      clause += ` ${OPERATOR_TO_SQL_MAPPING[operator]} '%${value}'`;
      break;
    }
    case 'null':
    case 'notNull': {
      clause += ` ${OPERATOR_TO_SQL_MAPPING[operator]}`;
      break;
    }
    case 'between':
    case 'notBetween': {
      const formattedValue: string[] = String(value)
        .split(',')
        .map((val) => (val && !!val.trim() ? `'${val.trim()}'` : ''))
        .filter((val) => !!val);
      if (formattedValue.length === 2) {
        clause += ` ${OPERATOR_TO_SQL_MAPPING[operator]} ${formattedValue[0]} AND ${formattedValue[1]}`;
      } else clause = '';
      break;
    }
    default:
      clause += ` ${operator} '${value}'`;
  }
  return clause;
};

const isRuleGroup = (rule: Rule | RuleGroup): rule is RuleGroup => {
  return (rule as RuleGroup).rules !== undefined;
};

export const prepareSqlStatement = (list: Rules): string => {
  const { combinator, rules } = list;

  const clauseList: string[] = rules
    .map((rule) => {
      if (isRuleGroup(rule)) {
        return `(${prepareSqlStatement(rule)})`;
      } else {
        return prepareWhereClause(rule);
      }
    })
    .filter((rule) => !!rule);
  const whereClause: string = clauseList.join(` ${combinator.toUpperCase()} `);
  return whereClause;
};

const transformToJSONLogic = (rules: any) => {
  try {
    const sql: string = prepareSqlStatement(rules);
    const query: DefaultRuleGroupType = parseSQL(sql);
    const expression: string = formatQuery(query, 'jsonlogic');
    return expression;
  } catch (e) {
    console.error(e);
    throw new Error('Invalid JsonLogic expression');
  }
};

export default transformToJSONLogic;
