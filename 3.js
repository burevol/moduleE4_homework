function getSimpleObject() {
    return Object.create(null);
}

let simpleObject = getSimpleObject();
console.log(Object.getPrototypeOf(simpleObject))