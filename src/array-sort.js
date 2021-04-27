export function leastToGreatest(arr){
  return arr.sort((a, b) => a - b);
}

export function greatestToLeast(arr){
  return arr.sort((a, b) => b - a);
}

export function lengthSort(arr){
  return arr.sort((a, b) => a.length - b.length);
}

export function alphabetical(arr){
  return arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
}

export function byAge(arr){
  return arr.sort((a, b) => a.age - b.age);
}