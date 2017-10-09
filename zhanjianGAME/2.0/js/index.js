var view = {
    // 设置信息
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    // 显示战舰
    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    // 显示miss
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

var model = {
    // 游戏板网格的大小
    boardSize: 7,
    // 游戏包含的战舰数
    numShips: 3,
    // 每艘战舰占据多少个单元格
    shipLength: 3,
    // 有多少战艘战舰已经被击沉
    shipsSunk: 0,
    // 战舰所处位置以及被击中的部位
    ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
            { locations: ["24", "34", "44"], hits: ["", "", ""] },
            { locations: ["10", "11", "12"], hits: ["", "", ""] }],
            
    // 处理玩家向战舰开火的方法，判断是否击中
    fire: function(guess) {
        for(var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            // 获取战舰占据位置
            //var locations = ship.locations;
            // locations.indexOf(guess)判断guess是否存在于数组中，若没有返回-1
            //var index = locations.indexOf(guess);
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                //击中了战舰
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");          
                // 判断是否击沉      
                if(this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },
    // 判断战舰是否被击沉
    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};

var controller = {
    guesses: 0,

    processGuess: function(guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
            }
        }
    }
};


// 将输入转换为数字
function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board.");
    } else {
        // 获取guess中的第一个字符
        firstChar = guess.charAt(0);
        // 查找firstChar在字母表中的索引
        var row = alphabet.indexOf(firstChar);
        // 获取guess中的第二个字符
        var column = guess.charAt(1);

        // 检测是否都为数字
        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            // 确认数值在0~6之间
            alert("Oops, that's off the board!");
        } else {
            return row + column;
        }
    }
    return null;
}

// 获取表单中玩家输入的值
function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handelKeyPress;
}

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    // 将输入交给控制器
    controller.processGuess(guess);

    guessInput.value = "";
}

function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}

window.onload = init;

