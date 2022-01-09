// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Dog extends Animal {
        static greeting = "Bark!";
        constructor(name) {
            super(name);
            this.name = name;
        }
    }

    class Cat extends Animal {
        static greeting = "Nyaa!";
        constructor(name) {
            super(name);
            this.name = name;
        }
    }

    let fairyCat = new Cat("Happy");
    console.log(fairyCat.sayHello());

    let heroDog = new Dog("Iggy");
    console.log(heroDog.sayHello());
})();