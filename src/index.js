module.exports = function reverse (n) {
  let output = '';
  n = Math.abs(n);
  while (n > 0) {
      let digit = n % 10;
      output += digit;
      n = Math.floor(n / 10);
  }

  return output;
}
