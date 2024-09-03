const person = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer'
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}