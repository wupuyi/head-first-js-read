var passengers = [
    {
        name: "Jane Doloop",
        paid: true,
        ticket: "coach"
    }, {
        name: "Dr. Evel",
        paid: true,
        ticket: "firstclass"
    }, {
        name: "Sue Property",
        paid: false,
        ticket: "firstclass"
    }, {
        name: "John Funcall",
        paid: true,
        ticket: "premium"
    }
];

function createDrinkOrder(passenger) {
    var orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("Would you like a cooktail or wine?");
        };
    } else if (passenger.ticket === "coach") {
        orderFunction = function () {
            alert("Your choice is cola or water.");
        };
    } else {
        orderFunction = function () {
            alert("Would you like a cola or water or drink?");
        }
    }

    return orderFunction;
}

function createDinnerOrder(passenger) {
    var orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("您需要来点鸡肉或者意大利面吗？");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function () {
            alert("您需要来点快餐或者芝士拼盘吗？");
        };
    } else {
        orderFunction = function () {
            alert("您需要来点花生饼或者椒盐脆饼吗？");
        };
    }

    return orderFunction;
}

function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    getDrinkOrderFunction();
    getDinnerOrderFunction();
}

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);