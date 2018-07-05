var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add', function(){
    calculator.previousTotal = 8;
    calculator.add(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 13)
  })

  it('should be able to subtract', function(){
    calculator.previousTotal = 9;
    calculator.subtract(6);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3)
  })

  it('should be able to multiply positive numbers', function(){
    calculator.previousTotal = 4;
    calculator.multiply(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 16)
  })

  it('should be able to multiply negative numbers', function(){
    calculator.previousTotal = -5;
    calculator.multiply(-5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 25)
  })

  it('should be able to divide', function(){
    calculator.previousTotal = 10;
    calculator.divide(2);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5)
  })

  it('should return infinity when divided by zero', function (){
    calculator.previousTotal = 6;
    calculator.divide(0);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, Infinity )
  })

  it('should be able to divide decimals', function (){
    calculator.previousTotal = 0.5;
    calculator.divide(2);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 0.25)
  })

  it('should be able to click on a number', function(){
    calculator.previousTotal = 3;
    calculator.numberClick(2);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 2)
  })

  it('should be able to click on an operator', function(){
    calculator.operatorClick('+');
    const actual = calculator.previousOperator;
    assert.strictEqual(actual, '+')
  })

  it('should be able to click on clear', function(){
    calculator.numberClick(10);
    calculator.clearClick();
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 0)
  })

  it('should be able to perform multiple operations in succession', function(){
    calculator.runningTotal = 1;
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('-');
    calculator.numberClick(3);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 11)
  })

  it('should be able to concatenate multiple number of button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    calculator.numberClick(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 12345)
  })

  it('should be able to clear the running total without affecting the calculation', function(){
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.clearClick();
    calculator.add(2);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 6)
  })

});
