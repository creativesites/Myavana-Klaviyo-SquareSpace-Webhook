var users = [
    { id: 1, name: "ted" },
    { id: 1, name: "ted" },
    { id: 1, name: "bob" },
    { id: 3, name: "sara" },
    { id: 4, name: "test" },
    { id: 4, name: "test" },
    { id: 5, name: "abc" },
    { id: 6, name: "abc" },
    { id: 7, name: "test2" },
    { id: 8, name: "test1" },
    { id: 8, name: "test1" }
    ];

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()];
}

const arr1 = getUniqueListBy(users, "id");

//var reduced = [...array.reduce((p, c) => p.set(c, true), new Map()).keys()];

const arr2 = getUniqueListBy(users, "name");

let q = [...new Map(users.map(obj => [JSON.stringify(obj), obj])).values()];

console.log("map methods");

//console.log("array unique", reduced);

console.log("Map unique with id ", JSON.stringify(arr1));

//console.log("map unique", q);