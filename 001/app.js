
const cats = [
    { name: 'Pilkis', weight: 4 },
    { name: 'Murka', weight: 7 },
    { name: 'Keris', weight: 3 }
];
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const mas = [...Array(5)].map(_ => rand(100, 999));

console.log(mas);


rand(100, 999)


const weight = [...cats].map(mass => mass.weight + 1)
console.log(weight)