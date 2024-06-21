interface OperatorToSqlMapping {
    [key: string]: string;
}

export const OPERATOR_TO_SQL_MAPPING: OperatorToSqlMapping = {
    notIn: 'not in',
    contains: 'like',
    beginsWith: 'like',
    endsWith: 'like',
    doesNotContain: 'not like',
    doesNotBeginWith: 'not like',
    doesNotEndWith: 'not like',
    null: 'is null',
    notNull: 'is not null',
    between: 'between',
    notBetween: 'not between',
};
