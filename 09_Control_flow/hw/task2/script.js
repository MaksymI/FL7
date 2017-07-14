var game = confirm ("Чи бажаєте почати гру?");


if (!game) {
    console.log("Сьогодні ви не виграли мільйон, а могли");
    alert("Сьогодні ви не виграли мільйон, а могли");
} else {
    var win_base_1 = 10;
    var win_base_2 = 5;
    var win_base_3 = 2;
    var win_multiplayer = 1;

    var range_base = 5;
    var range_multiplayer = 1;

    var num_of_attempts = 3;
    var win_amount = 0;

    outer: while (game) {
     var number = Math.floor( Math.random() * (range_base * range_multiplayer + 1) );
     console.log(`hint ;) - ${number}`); // for test purpose
    

       inner: while (num_of_attempts--) {
            var gamer_number = prompt(`Вгадайте число в проміжку від 0 до ${range_base*range_multiplayer}. Ваш виграш - ${win_amount}$. Можливо додатково виграти ${win_base_1 * win_multiplayer}$. Спроба №${3-num_of_attempts} з 3.`);
         
            if (gamer_number == number) {
             
                switch (num_of_attempts) {
                    case 2:
                    win_amount = win_amount + (win_base_1 * win_multiplayer);
                    break;
                    case 1:
                    win_amount = win_amount + (win_base_2 * win_multiplayer);
                    break;
                    case 0:
                    win_amount = win_amount + (win_base_3 * win_multiplayer);
                    break;
                    default:
                    break;
                }
             
                console.log(`Ваш виграш - ${win_amount}$`);
                break;
            } 
            
            // якщо це не перша гра (а гра на підвищення ставок - range_multiplayer != 1) та гравець програв (num_of_attempts === 0)
            else if (num_of_attempts === 0 && range_multiplayer != 1) {
                    win_amount = 0;
                    console.log(`Дякуємо за гру, ваш виграш становить - ${win_amount}$`);
                    alert(`Дякуємо за гру, ваш виграш становить - ${win_amount}$`);
                    game = false;
                    break outer;
                }

        }

        game = confirm (`Ваш виграш - ${win_amount}$. Чи бажаєте продовжити гру?`);

        if (!game) {
            console.log(`Дякуємо за гру, ваш виграш становить - ${win_amount}$`);
            alert(`Дякуємо за гру, ваш виграш становить - ${win_amount}$`);
        } else if (range_multiplayer === 1 && win_amount === 0 ) { // якщо це перша гра та гравець програв, але хоче грати ще раз (game=true)
                num_of_attempts = 3;
                 // просто продовжуємо гру. не збільшуємо range_multiplayer, win_multiplayer
        } else { // якщо гравець виграв та грає далі на підвищення
            range_multiplayer = range_multiplayer * 2;
            win_multiplayer = win_multiplayer * 3;
            num_of_attempts = 3;
        }
    }
}
