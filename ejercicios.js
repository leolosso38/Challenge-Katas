
//KATA 1

function friend(friends) {
    const result = []; 
    for (let name of friends) { 
      if (name.length === 4){
        result.push(name) 
      }
    }
    return result; 
  }

console.log (friend(["Ryan", "Kieran", "Jason", "Yous"]))


// KATA 2


function capitalize(s) {
    let evenIndexed = ''; 
    let oddIndexed = ''; 
  
    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0) {
        evenIndexed += s[i].toUpperCase(); 
        oddIndexed += s[i]; 
      } else {
        evenIndexed += s[i]; 
        oddIndexed += s[i].toUpperCase();
      }
    }
  
    return [evenIndexed, oddIndexed]; 
  }
  console.log(capitalize("abcdef"))

//KATA 3
function calculate(string) {
  
    const words = string.split(" ");
    
    
    const numbers = [parseInt(words[2]), parseInt(words[6])]; 
    
    const operator = words[5]; 
    
    
    if (operator === "gains") {
      return numbers[0] + numbers[1]; // Sumar
    } else if (operator === "loses") {
      return numbers[0] - numbers[1]; // Restar
    }
  }

console.log(calculate("Panda has 48 apples and loses 4"))
console.log(calculate("Jerry has 34 apples and gains 6"))
//KATA 4




function reverseSlice(str) {
   let result = [];
    for (let i = str.length; i > 0; i--) {
        let substring = '';
        for (let j = i - 1; j >= 0; j--) {
            substring += str[j];
        }
        result.push(substring);
    }
    return result;
}
console.log (reverseSlice("abcde"))
console.log (reverseSlice("123"))

//KATA 5

function solve(words) {
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    
    let result = [];

    
    for (let i = 0; i < words.length; i++) {
        let word = words[i]; 
        let count = 0; // 

       
        for (let j = 0; j < word.length; j++) {
            let letter = word[j].toLowerCase(); 

            
            if (letter === alphabet[j]) {
                count++; 
            }
        }

        
        result.push(count);
    }

    
    return result;
}



console.log(solve(["abode", "ABc", "xyzD"])); 

//KATA 7


function convert(numbers) {
  let result = '';

 
  for (let i = 0; i < numbers.length; i += 2) {
    
    const pair = numbers.substr(i, 2);
    
    const asciiCode = parseInt(pair, 10);
    //
    result += String.fromCharCode(asciiCode);
  }

  return result; 
}


console.log(convert("65")); 
console.log(convert("656667")); 
console.log(convert("676584")); 
console.log(convert("73327673756932858080698267658369"))


//KATA 8:


function isDivisible(n) {
 
  for (let i = 1; i < arguments.length; i++) {
      
      if (n % arguments[i] !== 0) {
          return false;
      }
  }
 
  return true;
}


console.log(isDivisible(6, 1, 3)); // true
console.log(isDivisible(12, 2)); // true
console.log(isDivisible(100, 5, 4, 10, 25, 20)); // true
console.log(isDivisible(12, 7)); // false

//KATA 9

function sortCards(cards) {
  //le doy un valor numerico a cada carta
  const order = {'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'T': 10, 'J': 11, 'Q': 12, 'K': 13};

  // Uso la función de ordenamiento que compara dos cartas según el valor en el objeto 'order'
  return cards.sort((a, b) => order[a] - order[b]);
}

console.log(sortCards([3,9,"A",5,"T",8,2,4,"Q",7,"J",6,"K"]),["A",2,3,4,5,6,7,8,9,"T","J","Q","K"])
console.log(sortCards(["J","J",2,"T",9,6]), [2,6,9,"T","J","J"]);
console.log(sortCards(["A",2,3,4,5,6,6,7,8,9,"T","J","Q","A"]), ['A', 'A', 2, 3, 4, 5, 6, 6, 7, 8, 9, 'T', 'J', 'Q']);

//KATA 10

function sortGrades(grades) {
  function gradeOrder(grade) {
    if (grade === 'VB') return -1; 
    if (grade === 'V0+') return 0.5; 
    return parseFloat(grade.slice(1)); 
  }

  return grades.sort(function(a, b) {
    return gradeOrder(a) - gradeOrder(b);
  });
}


console.log(sortGrades(["V7", "V12", "V1"]), ["V1", "V7", "V12"]);
console.log(sortGrades(["V13", "V14", "VB", "V0"]), ["VB", "V0", "V13", "V14"]);
console.log(sortGrades(["V0+", "V0", "V16", "V2", "VB", "V6"]), ["VB", "V0", "V0+", "V2", "V6", "V16"]);
console.log(sortGrades(["V7"]), ["V7"]);
console.log(sortGrades([]), []);

//KATA 11

function bouncingBall(initial, proportion) {
  let bounces = 0;
  let currentHeight = initial;

  // Continuo mientras la pelota rebote a una altura mayor a 1
  while (currentHeight > 1) {
    currentHeight *= proportion; // La pelota rebota a una nueva altura
    bounces++; // Contamos el rebote
  }

  return bounces;
}


    console.log(bouncingBall(2, 0.5), 1);
    console.log(bouncingBall(4, 0.5), 2);
    console.log(bouncingBall(10, 0.1), 1);
    console.log(bouncingBall(100, 0.1), 2);
    console.log(bouncingBall(9, 0.3), 2);
    console.log(bouncingBall(30, 0.3), 3);
  

    //KATA 12

    function isItLetter(character) {
      // Verificar si el carácter es igual a una letra mayúscula o minúscula
      if (character === 'A' || character === 'B' || character === 'C' || character === 'D' || character === 'E' ||
          character === 'F' || character === 'G' || character === 'H' || character === 'I' || character === 'J' ||
          character === 'K' || character === 'L' || character === 'M' || character === 'N' || character === 'O' ||
          character === 'P' || character === 'Q' || character === 'R' || character === 'S' || character === 'T' ||
          character === 'U' || character === 'V' || character === 'W' || character === 'X' || character === 'Y' ||
          character === 'Z' ||
          character === 'a' || character === 'b' || character === 'c' || character === 'd' || character === 'e' ||
          character === 'f' || character === 'g' || character === 'h' || character === 'i' || character === 'j' ||
          character === 'k' || character === 'l' || character === 'm' || character === 'n' || character === 'o' ||
          character === 'p' || character === 'q' || character === 'r' || character === 's' || character === 't' ||
          character === 'u' || character === 'v' || character === 'w' || character === 'x' || character === 'y' ||
          character === 'z') {
        return true; // Es una letra
      } else {
        return false; // No es una letra
      }
    }

 console.log(isItLetter('a')); // true
console.log(isItLetter('1')); // false
console.log(isItLetter('Z')); // true
console.log(isItLetter('@')); // false
console.log(isItLetter('b')); // true
console.log(isItLetter('5')); // false