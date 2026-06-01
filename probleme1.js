function sumOfDistinctElements(set1, set2) {
  let sum = 0;

  // Éléments du set1 absents du set2
  for (let i = 0; i < set1.length; i++) {
    let found = false;
    for (let j = 0; j < set2.length; j++) {
      if (set1[i] === set2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      sum += set1[i];
    }
  }

  // Éléments du set2 absents du set1
  for (let i = 0; i < set2.length; i++) {
    let found = false;
    for (let j = 0; j < set1.length; j++) {
      if (set2[i] === set1[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      sum += set2[i];
    }
  }
  return sum;
}

let s1 = [3, 1, 7, 9];
let s2 = [2, 4, 1, 9, 3];
console.log("set1:", s1);
console.log("set2:", s2);
console.log("Résultat :", sumOfDistinctElements(s1, s2)); // Affichera bien 13
