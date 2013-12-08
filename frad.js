/**
 * Created by vitalik on 08.12.13.
 * Ни че не надо делать, просто наблюдать))азаззаза
 */
var Number = 777;
var pow;
if (typeof (Number) === 'number')
{
  function func(Number) {
    pow = 1;
    for (var i = 1; i <= 3; i++) {
      pow = pow * Number;
      console.log('Число 777 в ' + i + ' степени равно: ' + pow);
    }
    return pow;
  }
  var otvet = func(Number);
  console.log('Окончательный ответ: ' + otvet);
}
else
{
  console.error('Программа принимает только числа');
}