const repeatedWord = require('../hash-table/repeated-word');




describe('testing the repeated word function', ()=>{
  test('returns the repeated word', () => {
    expect(repeatedWord('Once upon a time, there was a brave princess who')).toBe('a');
  });});
