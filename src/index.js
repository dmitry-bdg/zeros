module.exports = function zeros(expression) {
  let factInInput = expression.split('*');
  let baseForZero = [2, 5];
  let inTwo = 0;
  let inFive = 0;
  
  factInInput.forEach(item => {
      let checkFact = item.includes('!!') ? 2 : 1;
      item = parseInt(item);
          baseForZero.forEach(inpos => {
          for (let i = item; i >= inpos; i -= checkFact) {
              if (!(i % inpos)) {
                  let x = i;
                  while (!(x % inpos)) {
                      x /= inpos;
                      inpos === 2 ? inTwo += 1: inFive += 1;
                  }
              }
          }   
      });
  });
  return inTwo < inFive ? inTwo : inFive;
}
