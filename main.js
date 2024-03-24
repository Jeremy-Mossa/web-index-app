function registerUser(user = 'Bot') {
    return user + ' is registered';
}
console.log(registerUser());

// Rest paramaters, unlimited arguments into an array

function sum(...numbers) {
    let total = 0;

    for (const n of numbers) {
        total += n;
    }

    return total;
}


console.log(sum(1,2,3,4,5, 6, 100));

// Objects as paramaters

function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'jay',
};

console.log(loginUser(user));

console.log(
    loginUser({
        id: 2,
        name: 'sally',    
        })
);

function getRandom(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    console.log(randomIndex);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom(121, 23, 34, 4555, 5, 6, 7, 8, 9, 11, 10, 10, 10);
