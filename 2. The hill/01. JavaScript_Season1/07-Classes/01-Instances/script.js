// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here

    let aristoCat = new Cat("Berlioz", 7);
    let fairyCat = new Cat("Happy", 3);
    console.log(aristoCat, fairyCat);
})();