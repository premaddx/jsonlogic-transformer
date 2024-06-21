import transformToJSON from './transformToJson';

describe('transformToJSON', () => {
  const validExpression = {
    and: [
      {
        '!': {
          '<=': [
            78,
            {
              var: 'firstName',
            },
            80,
          ],
        },
      },
      {
        '!=': [
          {
            var: 'lastName',
          },
          null,
        ],
      },
      {
        and: [
          {
            in: [
              'jo',
              {
                var: 'firstName',
              },
            ],
          },
          {
            startsWith: [
              {
                var: 'lastName',
              },
              'nkk',
            ],
          },
          {
            '!': {
              startsWith: [
                {
                  var: 'lastName',
                },
                'mll',
              ],
            },
          },
          {
            '!': {
              endsWith: [
                {
                  var: 'firstName',
                },
                'nkk',
              ],
            },
          },
          {
            '==': [
              {
                var: 'firstName',
              },
              '',
            ],
          },
        ],
      },
      {
        in: [
          {
            var: 'firstName',
          },
          ['hjv', 'h'],
        ],
      },
      {
        endsWith: [
          {
            var: 'lastName',
          },
          'dd',
        ],
      },
      {
        '!': {
          in: [
            'fadfad',
            {
              var: 'description',
            },
          ],
        },
      },
      {
        '==': [
          {
            var: 'gender',
          },
          'M',
        ],
      },
      {
        '==': [
          {
            var: 'isMusician',
          },
          true,
        ],
      },
      {
        '==': [
          {
            var: 'lastName',
          },
          null,
        ],
      },
      {
        '!': {
          in: [
            {
              var: 'firstName',
            },
            ['bk'],
          ],
        },
      },
      {
        '<=': [
          'cfhgvjbh',
          {
            var: 'lastName',
          },
          'hvbjn',
        ],
      },
      {
        '!': {
          '<=': [
            'jnkl',
            {
              var: 'lastName',
            },
            'jk',
          ],
        },
      },
    ],
  };

  it('should transform a valid JsonLogic expression to a JSON string', () => {
    const result = transformToJSON(validExpression);
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
    const parsedResult = JSON.parse(result);
    expect(parsedResult).toHaveProperty('rules');
  });
});
