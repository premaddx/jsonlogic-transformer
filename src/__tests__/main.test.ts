import { transformToJSON, transformToJSONLogic } from '../main';

describe('index exports', () => {
  it('should export transformToJSON function', () => {
    expect(typeof transformToJSON).toBe('function');
  });

  it('should export transformToJSONLogic function', () => {
    expect(typeof transformToJSONLogic).toBe('function');
  });
});
