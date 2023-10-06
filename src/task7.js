const formulaGerona = (a,b, c) => {
    const polyPi = (a + b + c) / 2;
    const square = Math.sqrt(polyPi * (polyPi - a) * (polyPi - b) * (polyPi - c));
    return square;
};
  
formulaGerona();
console.log(formulaGerona(6, 5, 3));  