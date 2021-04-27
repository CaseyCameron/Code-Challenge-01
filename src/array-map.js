export function doubleNumbers(array){
  return array.map(num => num * 2);
}

export function stringItUp(array){
  return array.map(String);
}

export function capitalizeNames(array){
  //const newArray = array.map(name => name.toLowerCase());
  const newArray = array.map(letter => letter.toLowerCase());
  const capitalizedArray = newArray.map(letter => letter.charAt(0).toUpperCase() + letter.slice(1));
  return capitalizedArray;
}

export function namesOnly(array){
  return array.map(name => name.name);
}

export function makeStrings(array){
  return array.map(n => {
    if (n.age > 16) return `${n.name} can go to The Matrix`;
    return `${n.name} is under age!!`;
  });
}

export function readyToPutInTheDOM(array){
  return array.map(n => {
    return `<h1>${n.name}</h1><h2>${n.age}</h2>`;
  });
}