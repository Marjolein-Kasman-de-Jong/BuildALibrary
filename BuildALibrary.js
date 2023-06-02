// ---------------------------------------------------------------------------
// Codecademy Front-End Engineer Career Path - Build a Library Project
// ---------------------------------------------------------------------------

// Media class

class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }

    getAverageRating() {
        const sum = this.ratings.reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
        }, 0);
        return sum / this.ratings.length;
    }

    addRating(newRating) {
        this.ratings.push(newRating);
    }
}

// Book subclass

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

// Movie subclass

class Movie extends Media {
    constructor(director, title, runtime) {
        super(title);
        this._director = director;
        this._runtime = runtime;        
    }

    get director() {
        return this._director;
    }

    get runtime() {
        return this._runtime;
    }
}

// Creates Book instance

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

// Calls .toggleCheckOutStatus() on historyOfEverything

historyOfEverything.toggleCheckOutStatus();

// Logs value saved to isCheckOut of historyOfEverything

console.log(historyOfEverything.isCheckedOut);

// Calls .addRating() on historyOfEverything 3 times

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

// Calls .getAverageRating() on historyOfEverything and logs result

console.log(historyOfEverything.getAverageRating());

// Creates Movie instance

const speed = new Movie('Jan de Bont', 'Speed', 116);

// Calls .toggleCheckOutStatus() on speed

speed.toggleCheckOutStatus();

// Logs value saved to isCheckOut of speed

console.log(speed.isCheckedOut);

// Calls .addRating() on speed 3 times

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

// Calls .getAverageRating() on speed and logs result

console.log(speed.getAverageRating());