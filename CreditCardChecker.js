// All valid credit card numbers

const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

 // An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]; 


  // Using Luhn algorithm:
const validateCred = num => {
  var total = 0;
  while(num > 0) {
    var a = num % 10;
    num = Math.floor(num / 10);
  // Odd digits:
    var b = (num % 10) * 2;
    num = Math.floor(num / 10);
  //subtracting 9 from the numbers bigger than 9:
    if (b > 9) {
      b -= 9;
    }
    total += a + b; //Adding up all the numbers in the array. 
  }
  return total % 10 === 0; // The array contains valid number
};  

for(let i=0; i < batch.length;i++) {
  //console.log(Number(batch[i].join('')));
  //console.log("\n")
  console.log(validateCred(Number(batch[i].join(''))));
}

 //Checking invalid cards and returning them into an array:


function findInvalidCards(arr) { 
  let invalidCards = [] 
  for(let i=0; i < arr.length; i++) {
    let number = Number(batch[i].join(''));
    if ( !validateCred(number)) {
      invalidCards.push(number);
    }
  }
  return invalidCards; 
};
invalidNumbers = findInvalidCards(batch);
console.log(invalidNumbers);

//Credit card company identification and returning them into an array:

function idInvalidCardCompanies(arr) {  
  let invalidCompany = [];  
  for(let i=0; i < arr.length; i++) {
    let firstDigit = String(Math.abs(arr[i]))[0];
    let card = 'Company not found';
    if (firstDigit === '3') {
       card = 'Amex'
    } else if (firstDigit === '4') {
       card = 'Visa'
    } else if (firstDigit === '5') {
       card = 'Mastercard'
    } else if (firstDigit === '6') {
       card = 'Discover'
    } 
    if ( !invalidCompany.includes(card) )
      invalidCompany.push(card);
  }
  return invalidCompany;
}
//Checking if the code works:
console.log(idInvalidCardCompanies(invalidNumbers));