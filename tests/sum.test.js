const mathOperations = require('./sum');
describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
      // arrange and act
      var result = mathOperations.sum(1,2)
    
      // assert
      expect(result).toBe(3);
    });
   })

   describe("Calculator tests", () => {
    test('difference of 2 and 1 should return 1', () => {
      // arrange and act
      var result = mathOperations.diff(2,1)
    
      // assert
      expect(result).toBe(1);
    });
   })
   describe("Calculator tests", () => {
    test('Product of 9 and 9 should return 81', () => {
      // arrange and act
      var result = mathOperations.product(9,9)
    
      // assert
      expect(result).toBe(81);
    });
   })

