// Написати конструктор User
// В конструкторі мають сетатись якісь дефолтні значення (можна рендомом) для наступних властивостей:
// lastVisitDate, globalDiscount, nightDiscount, weekendDiscount, ordersCount, ordersTotalPrice, bonus

class User {
    constructor() {
        this.lastVisitDate = new Date(`Sep 01, 2017 ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
        this.globalDiscount = 5;
        this.nightDiscount = 7;
        this.weekendDiscount = 5;
        this.ordersCount = 0;
        this.ordersTotalPrice = 0;
        this.bonus = 100;
    }
}

var user = new User();

// Написати наступні декоратори:
// getDiscount(), має перевіряти чи зараз ніч (23:00 - 05:00) і чи зараз робочий день,
// відповідно сумувати globalDiscount, nightDiscount, weekendDiscount в залежності від умов і вертати сумарну знижку;

function getDiscount(user) {
    this.user = user;
    this.user.globalDiscount = user.globalDiscount;
    var date = new Date();
    var day = date.getDay();
    var weekend = (day == 6 || day == 7);
    if (weekend) {
        this.user.weekendDiscount = user.weekendDiscount;
    } else {
        this.user.weekendDiscount = 0;
    }
    var hours = date.getHours();
    var night = (hours >= 23 || hours < 5)
    if (night) {
        this.user.nightDiscount = user.nightDiscount;
    } else {
        this.user.nightDiscount = 0;
    }
    return this.user.globalDiscount + this.user.weekendDiscount + this.user.nightDiscount;
}

console.log(`Total user discount: ${getDiscount(user)}`);


// getBonus(), якщо користувач минулий раз був на сайті протягом останніх 10 днів, то додаємо до бонуса
// (240 - кількість годин від lastVisitDate до поточного часу). Окрім цього додаємо ordersCount;

function getBonus(user) {
    this.user = user;
    var hoursFromLastVisit = Math.ceil((new Date() - this.user.lastVisitDate)/(1000*60*60));
    if (hoursFromLastVisit <= 240) {
        this.user.bonus += hoursFromLastVisit;
    }
    this.user.ordersCount++;
}

getBonus(user);
console.log(`Now user have ${user.bonus} bonus and he makes ${user.ordersCount} orders`);
