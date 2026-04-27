const person = {
  name: 'Rick',
  age: 77,
  country: 'US',
}
const clone1 = {...person}
const clone2 = {...person}
const samePerson = person
samePerson = {
    age : age+1,
    country : 'FR',
}

