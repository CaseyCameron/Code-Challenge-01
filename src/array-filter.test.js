import { 
  fiveAndGreaterOnly,
  evensOnly,
  fiveCharactersOrFewerOnly,
  peopleWhoBelongToTheIlluminati,
  ofAge
} from './array-filter';

test('Five and greater only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = fiveAndGreaterOnly(input); // act
  expect(output).toEqual([6, 8]); // assert
});

test('Evens  only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = evensOnly(input); // act
  expect(output).toEqual([6, 8, 2]); // assert
});

test('Five chars or fewer only', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping']; // arrange
  const output = fiveCharactersOrFewerOnly(input); // act
  expect(output).toEqual(['by', 'dog', 'wolf', 'eaten']); // assert
});

test('Five chars or fewer only', () => {
  const input = [
    { name: 'Angelina Jolie', member: true },
    { name: 'Eric Jones', member: false },
    { name: 'Paris Hilton', member: true },
    { name: 'Kayne West', member: false },
    { name: 'Bob Ziroll', member: true }
  ]; 
  const output = peopleWhoBelongToTheIlluminati(input); // act
  expect(output).toEqual([ 
    { name: 'Angelina Jolie', member: true }, 
    { name: 'Paris Hilton', member: true }, 
    { name: 'Bob Ziroll', member: true } 
  ]);
});

test('Five chars or fewer only', () => {
  const input = [
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Eric Jones', age: 2 },
    { name: 'Paris Hilton', age: 5 },
    { name: 'Kayne West', age: 16 },
    { name: 'Bob Ziroll', age: 100 }
  ];
  const output = ofAge(input); // act
  expect(output).toEqual([ 
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Bob Ziroll', age: 100 } 
  ]);
});