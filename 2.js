function hasProperty(obj, property) {
    for (let key in obj) {
        if (key === property) {
            return true;
        }
    }
    return false;
}

obj1 = {
    one: "One",
}

console.log(hasProperty(obj1, 'one'));
console.log(hasProperty(obj1, 'two'));