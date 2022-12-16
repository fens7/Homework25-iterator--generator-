let object1 = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
};

object1[Symbol.iterator] = function () {
    this.a = 0;
    return {
        current: this.a,
        last: this.d,
        next: function () {
            if (this.current < this.last) {
                return { value: (this.current += 10), done: false };
            } else {
                return { value: undefined, done: true };
            }
        },
    };
};

for (let value1 of object1) {
    console.log(value1);
}


let object2 = {
    name: 'Stanley',
    Job: 'Web dev',
    age: 28,
};

object2[Symbol.iterator] = function* () {
    for (let prop in this) {
        yield this[prop];
    }
};

for (let value2 of object2) {
    console.log(value2);
}