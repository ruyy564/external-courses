function isSimpleOrCompositeNumber(number) {
  let result;
  if (number > 1000) {
    result = 'Данные неверны';
  } else if (number === 0 || number === 1) {
    result = 'Не причисляется ни к простым, ни к составным числам';
  } else {
    let count = 0;
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        count += 1;
      }
    }
    if (count !== 0) {
      result = `Число ${number} - составное число`;
    } else {
      result = `Число ${number} - простое число`;
    }
  }
  return result;
}
module.exports = isSimpleOrCompositeNumber;
