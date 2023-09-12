const factorial = require('./math');

describe('Factorial Function', () => {
  it('should return 1 when n is 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should return 1 when n is 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should calculate the factorial of a positive number', () => {
    expect(factorial(5)).toBe(120); // 5! = 120
  });

  it('should calculate the factorial of a larger number', () => {
    expect(factorial(10)).toBe(3628800); // 10! = 3628800
  });

  it('should handle asynchronous tests', async () => {
    const result = await factorial(3);
    expect(result).toBe(6); // 3! = 6
  });
});
