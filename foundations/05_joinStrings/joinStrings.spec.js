const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is John', () => {
    expect(values.firstName).toEqual('John');
  });
  test.skip('lastName is Nguyen', () => {
    expect(values.lastName).toEqual('Nguyen');
  });
  test.skip('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test.skip('birthYear is 1993', () => {
    expect(values.birthYear).toEqual(1993);
  });
  test.skip('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is John Nguyen and I am 33 years old.');
  });
});

describe('step 3', () => {
  test.skip('fullName is John Nguyen', () => {
    expect(values.fullName).toEqual('John Nguyen');
  });
  test.skip('age is 33', () => {
    expect(values.age).toEqual(33);
  });
});
