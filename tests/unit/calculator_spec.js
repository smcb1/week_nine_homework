var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should return 1+4=5', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5)
  })

  it('should return 7-4=3', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  it('should return 3*5=15', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  })

  it('should return 21/7=3', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3)
  })

  it('should concatenate number button clicks: 2 then 2 = 22', function(){
    calculator.numberClick(2)
    calculator.numberClick(2)
    assert.equal(calculator.runningTotal,22)
  })

  it('should chain multiple operations together: 2+2*2=8', function(){
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal,8)
  })

  it('should clear the running total without affecting the calculation 2+2*1 clrClick *2=8', function(){
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(1)
    calculator.clearClick()
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal,8)
  })

});
