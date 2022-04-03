function getObjectProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Ключ: ${key}, значение: ${obj[key]}`);
        }
    }
}

let obj_parent = {
    one: "One",
}

let obj = Object.create(obj_parent);
obj.two ='Two'

getObjectProperties(obj);