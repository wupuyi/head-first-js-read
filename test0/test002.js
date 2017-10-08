var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    started: false,
    fuel: 0,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.fuel > 0) {
            if (this.started) {
                alert(this.make + " " + this.model + "goes zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                alert("You need to start the engine first.");
            }
        } else {
            alert("Uh oh, out of fuel!");
            this.stop();
        }

    },
    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    }
};
var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            alert(this.make + " " + this.model + "goes zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    }
};
var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            alert(this.make + " " + this.model + "goes zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    }
};


cadi.start();
cadi.drive();
cadi.addFuel(2);
cadi.start();
cadi.drive();
cadi.drive();
cadi.drive();
cadi.stop();

chevy.start();
chevy.drive();
chevy.stop();

taxi.start();
taxi.drive();
taxi.stop();

for (var prop in chevy) {
    console.log(prop + ": " + chevy[prop]);
}