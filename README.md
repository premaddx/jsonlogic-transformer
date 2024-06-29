# jsonlogic-transformer

A simple package for transforming JsonLogic to JSON and vice-versa

## Basic Usage

```
npm i jsonlogic-transformer
```

## Transform to JSON

```
import { transformToJSON } from 'jsonlogic-transformer';

const expression = {
    and: [{
            '>': [{
                    var: 'firstName',
                },
                'Stev',
            ],
        },
        {
            '!': {
                in: [{
                        var: 'age',
                    },
                    ['12'],
                ],
            },
        },
        {
            or: [{
                '==': [{
                        var: 'age',
                    },
                    '25',
                ],
            }, ],
        },
    ],
};

const jsonOutput = transformToJSON(expression);

console.log(jsonOutput);

/**
{
    "combinator": "and",
    "rules": [{
        "field": "firstName",
        "operator": ">",
        "value": "Stev"
    }, {
        "field": "age",
        "operator": "notIn",
        "value": "12"
    }, {
        "combinator": "or",
        "rules": [{
            "field": "age",
            "operator": "=",
            "value": "25"
        }]
    }]
}
**/

```

## Transform to JsonLogic

```
import { transformToJSONLogic } from 'jsonlogic-transformer';

const rules = {
    combinator: 'and',
    not: false,
    rules: [{
            field: 'firstName',
            value: 'Stev, Bob',
            operator: 'notBetween',
        },
        {
            field: 'age',
            operator: 'notNull',
            valueSource: 'value',
            value: '12',
        },
        {
            rules: [{
                    field: 'age',
                    operator: '>',
                    valueSource: 'value',
                    value: '25',
                },
                {
                    field: 'age',
                    operator: '<',
                    valueSource: 'value',
                    value: '18',
                },
                {
                    field: 'lastName',
                    operator: 'notBetween',
                    valueSource: 'value',
                    value: 'jnkl, nk',
                },
            ],
            combinator: 'or',
            not: false,
        },
    ],
};


const result = transformToJSONLogic(rules);
console.log(result);

/**
{
    "and": [{
        "!": {
            "<=": ["Stev", {
                "var": "firstName"
            }, "Bob"]
        }
    }, {
        "!=": [{
            "var": "age"
        }, null]
    }, {
        "or": [{
            ">": [{
                "var": "age"
            }, "25"]
        }, {
            "<": [{
                "var": "age"
            }, "18"]
        }, {
            "!": {
                "<=": ["jnkl", {
                    "var": "lastName"
                }, "nk"]
            }
        }]
    }]
}
**/

```
