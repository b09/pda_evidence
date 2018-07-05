var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it('should update the display of the running total through selecting the equals button', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  });

  it('should update the display with result of operation after selecting add button', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  });

  it('should update the display with result of operation after selecting subtract button', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  });

  it('should update the display with result of operation after selecting multiply button', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_multiply')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('25')
  });

  it('should update the display with result of operation after selecting divide button', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  });

  it('should chain multiple operations together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_subtract')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-5')
  });

  it('should display positive numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    expect(running_total.getAttribute('value')).to.eventually.be.at.least('0')
  });

  it('should display negative numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_subtract')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-1')
  });

  it('should display decimal numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.5')
  });

  it('should display large numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    for ( var i = 0; i < 5; i++) {
      element(by.css('#operator_multiply')).click();
    }
    expect(running_total.getAttribute('value')).to.eventually.be.at.least('1000000000')
  });

  it('should display message of Infinity for numbers that are too large', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    for ( var i = 0; i < 10; i++) {
      element(by.css('#operator_multiply')).click();
    }
    expect(running_total.getAttribute('value')).to.eventually.equal('Infinity')
  });

  it('should display message of Infinity for numbers divided by zero', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Infinity')
  });

});



// You should test for the following:
//  Do the number buttons work to update the display of the running total?
//  Do each of the arithmetical operations work to update the display with the result of the operation?
//  Can we chain multiple operations together?
//  Does it work as expected for a range of numbers? (positive, negative, decimals, large numbers)
// What does the code do in exceptional circumstances?
// If you divide by zero, what is the effect?
// Can you write a test to describe what you'd prefer to happen under this circumstance, and then correct to code to make that test pass.



// You should write tests to ensure:
//
//     Do the number buttons work to update the display of the running total?
//     Do each of the arithmetical operations work to update the display with the result of the operation?
//     Can we chain multiple operations together?
//     Does it work as expected for a range of numbers? (positive, negative, decimals, very large numbers)
//
// What does the code do in exceptional circumstances?
//
//     If you divide by zero, what is the effect?
//     Can you write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.
