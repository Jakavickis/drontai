const array = []

function rand(min, max) {
    for (i = 0; i < 10; i++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        array.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
}

rand(100, 999)

console.log(array)