import transformToJSONLogic, {
  prepareSqlStatement,
  prepareWhereClause,
} from '../transformToJsonlogic';
import { Rule, Rules } from '../types';

describe('transformToJSONLogic', () => {
  const validRules: Rules = {
    combinator: 'and',
    not: false,
    rules: [
      {
        field: 'firstName',
        value: '78,80',
        operator: 'notBetween',
      },
      {
        field: 'lastName',
        operator: 'notNull',
        valueSource: 'value',
        value: 'Bob,asdf',
      },
      {
        rules: [
          {
            field: 'firstName',
            operator: 'contains',
            valueSource: 'value',
            value: 'jo',
          },
          {
            field: 'lastName',
            operator: 'beginsWith',
            valueSource: 'value',
            value: 'nkk',
          },
          {
            field: 'lastName',
            operator: 'doesNotBeginWith',
            valueSource: 'value',
            value: 'mll',
          },
          {
            field: 'firstName',
            operator: 'doesNotEndWith',
            valueSource: 'value',
            value: 'nkk',
          },
          {
            field: 'firstName',
            operator: '=',
            valueSource: 'value',
            value: '',
          },
        ],
        combinator: 'and',
        not: false,
      },
      {
        field: 'firstName',
        operator: 'in',
        valueSource: 'value',
        value: 'hjv,h',
      },
      {
        field: 'lastName',
        operator: 'endsWith',
        valueSource: 'value',
        value: 'dd',
      },
      {
        field: 'description',
        operator: 'doesNotContain',
        valueSource: 'value',
        value: 'fadfad',
      },
      {
        field: 'gender',
        operator: '=',
        valueSource: 'value',
        value: 'M',
      },
      {
        field: 'isMusician',
        operator: '=',
        valueSource: 'value',
        value: true,
      },
      {
        field: 'lastName',
        operator: 'null',
        valueSource: 'value',
        value: '',
      },
      {
        field: 'firstName',
        operator: 'notIn',
        valueSource: 'value',
        value: 'bk',
      },
      {
        field: 'lastName',
        operator: 'between',
        valueSource: 'value',
        value: 'cfhgvjbh,hvbjn',
      },
      {
        field: 'lastName',
        operator: 'notBetween',
        valueSource: 'value',
        value: 'jnkl,jk',
      },
      {
        field: 'lastName',
        operator: 'notBetween',
        valueSource: 'value',
        value: 'jnkl',
      },
    ],
  };

  it('should transform a valid rules object to a JSONLogic string', () => {
    const result = transformToJSONLogic(validRules);
    expect(result).toBeDefined();
  });

  it('should throw an error for an invalid rules object', () => {
    const invalidRules: any = {
      combinator: 'and',
      not: false,
      rules: [
        {
          field: 'firstName',
          operator: 'invalidOperator',
          value: 'Stev',
        },
      ],
    };

    expect(() => transformToJSONLogic(invalidRules)).toThrow(
      'Invalid JsonLogic expression',
    );
  });
});

describe('prepareWhereClause', () => {
  it('should correctly format the SQL clause for "in" operator', () => {
    const rule: Rule = { field: 'age', operator: 'in', value: '25,30' };
    const result = prepareWhereClause(rule);
    expect(result).toBe("age in ('25', '30')");
  });

  it('should correctly format the SQL clause for "between" operator', () => {
    const rule: Rule = { field: 'age', operator: 'between', value: '20,30' };
    const result = prepareWhereClause(rule);
    expect(result).toBe("age between '20' AND '30'");
  });
});

describe('prepareSqlStatement', () => {
  it('should correctly format the SQL statement for a simple rule', () => {
    const rules: Rules = {
      combinator: 'and',
      not: false,
      rules: [{ field: 'age', operator: '>', value: '25' }],
    };
    const result = prepareSqlStatement(rules);
    expect(result).toBe("age > '25'");
  });

  it('should correctly format the SQL statement for a nested rule group', () => {
    const rules: Rules = {
      combinator: 'and',
      not: false,
      rules: [
        {
          field: 'age',
          operator: '>',
          value: '25',
        },
        {
          combinator: 'or',
          not: false,
          rules: [
            {
              field: 'firstName',
              operator: 'in',
              value: 'John,Doe',
            },
            {
              field: 'lastName',
              operator: 'notNull',
            },
            {
              field: 'firstName',
              operator: 'notIn',
              value: 'Jane,Bob',
            },
          ],
        },
      ],
    };
    const result = prepareSqlStatement(rules);
    expect(result).toBe(
      "age > '25' AND (firstName in ('John', 'Doe') OR lastName is not null OR firstName not in ('Jane', 'Bob'))",
    );
  });
});
