// rest and spread with arrays

const arr = [ 1, 2, 3 , 4, 5 ];
const [ a, b, c,...rest] = arr;
const arr2 = [...rest]

const user = {
  name: 'Rakib',
  age :25
}
const user1 = {...user};
const user3 = {
  ...user1,
  name: 'New Name'
}

console.log(user3)
// user1.name = 'Changed';