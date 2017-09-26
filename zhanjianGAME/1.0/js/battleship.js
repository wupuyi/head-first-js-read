//location1,location2,location3用来存储战舰位置
// guess用来存储用户猜测的变量
// hits存储用户击中
// gusses存储用户猜测次数
// isSunk存储用户是否击沉
var randomLoc = Math.floor(Math.random() * 5),
    location1 = randomLoc,
    location2 = location1 + 1,
    location3 = location2 + 1,
    guess,
    hits = 0,
    guesses = 0,
    isSunk = false;

    // 循环判断
    while (isSunk == false) {
        
        guess = prompt("Ready, aim, fire!  （enter a number 0-6）:");
        if(guess < 0 || guess > 6) {
            alert("Please enter a valid cell number!");
        }else {
            guesses++;

            if (guess == location1 || guess == location2 ||guess == location3) {
                alert('HIT!');
                hits++;
                if (hits == 3) {
                    isSunk = true;
                    alert("You sank my battleship!");
                }
            }else {
                alert('MISS!');
            }
        }
        
    }

var stats = 'You took '+guesses + ' guesses to sink the battleship, ' + 
             'which means your shooting accuracy was ' + (3/guesses);

alert(stats);
             


