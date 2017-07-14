// Написати конвертер валют.
// За допомогою prompt користувач вводить кількість євро.
// За допомогою prompt користувач вводить кількість доларів.
// За допомогою alert вивести наступне:
// 100 euros are equal 2900 UAH, 52 dollars are equal 1404UAH, one euro is equal 1.074 dollars.
// Числа замінити на введені та обраховані дані

var euros_rate = 29204;
var dollars_rate = 25808;

var euros_to_dollars_rate = euros_rate/dollars_rate;

var euros = prompt('введить кількість євро');
var dollars = prompt('введить кількість доларів');

var euros_in_uah = euros*euros_rate/1000;

var dollars_in_uah = dollars*dollars_rate/1000;


alert(`${euros} euros are equal ${euros_in_uah.toFixed(2)} UAH, ${dollars} dollars are equal ${dollars_in_uah.toFixed(2)} UAH, one euro is equal ${euros_to_dollars_rate.toFixed(3)} dollars`);