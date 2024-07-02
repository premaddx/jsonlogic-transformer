type Operator =
  | 'in'
  | 'notIn'
  | 'contains'
  | 'beginsWith'
  | 'endsWith'
  | 'doesNotContain'
  | 'doesNotBeginWith'
  | 'doesNotEndWith'
  | 'null'
  | 'notNull'
  | 'between'
  | 'notBetween'
  | '>'
  | '<'
  | '='
  | '<='
  | '>=';

type ValueSource = 'value' | 'field';

export interface Rule {
  field?: string;
  operator: Operator;
  value?: string | boolean;
  valueSource?: ValueSource;
}

export interface RuleGroup {
  combinator: 'and' | 'or';
  not?: boolean;
  rules: (Rule | RuleGroup)[];
}

export interface Rules extends RuleGroup {}