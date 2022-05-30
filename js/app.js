
//answer to question one
document.querySelector('.team-name').style.color = 'brown';
document.querySelector(".team-name").innerHTML = "Team Hermes";

//answer to question two
const teamHermes = ["Edward-Precious Omegbu", "Natacha Elohor Danbadan", "Ifechukwude Nwaodor", "Jimi-Bada Adedamola", "Fawsiyya Lamidi", "Obi Divine", "Chinonso Michael"];
console.log(teamHermes[1]);

//answer to question three
let geniusNat = {
    "first name" : "Natacha",  
    "last name" : "Danbadan", 
    "best movie" : "like stars on earth",
    "best food"  : "Banga soup and starch",
    "complexion" : "brown",
    "birth month" : "february",
    "State" : "kebbi state",
    "group name" : "Team Hermes",
}
console.log(geniusNat["best movie"]);

//answer to question four
let aNoun = "Nigeria";
let aVerb = "will";
let anAdjective = "Great";
console.log(aNoun + " " + aVerb + " " + "be " + anAdjective + " " + "again");
console.log(aNoun + " " + aVerb + " " + "prosper");
console.log(aNoun + " " + aVerb + " " + "stand " + "strong");
console.log(aNoun + " " + aVerb + " " + "speak " + " of my" + " "  + "greatness");
console.log(aNoun + " " + aVerb + " " + "lend to nations");

//answer to question five
function remainder (one, two) {
    console.log(one%two);
}
remainder(50,6);

//answer to question six
function generalQuadraticFormula(a,b,c) {
    var discriminant = Math.pow(b, 2) - 4 * a * c ;
    let x1 = (-1 * b + Math.sqrt(discriminant)) / 2 * a ;
    let x2 = (-1 * b - Math.sqrt(discriminant)) / 2 * a ;
    return x1.toFixed(2) + " and " + x2.toFixed(2) ;
}
console.log(generalQuadraticFormula(1, 1, -1));

//answer to question seven
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The White "  + myAdjective + " " + myNoun + " " + myVerb  + " " + myAdverb ; 
console.log(wordBlanks);

//answer to question eight
function areaOfaCircle(r) {
    const pi  = 3.142;
    const area  = pi * (r ** 2) ;
    return area;
}
console.log("The area of a circle with radius 9 is", (areaOfaCircle(9)).toFixed(2) + "cm" );

//answer to question nine
function simpleInterest(principal, rate, time) {
    var interest = (principal * rate * time)/100 ;
    return interest;
}
console.log("The principal of 8200 will yield to an interest of", (simpleInterest(8200,0.175,2.5)).toFixed(2));

//answer to question ten
let u = 10%4;
console.log(u);

//answer to question eleven
function comparebmi(testdata){
    let m1 = testdata[0][0];
    let m2 = testdata[1][0];
    let h1 = testdata[0][1];
    let h2 = testdata[1][1];

    let bmi1 = bmica1cu1ator(m1,h1);
    let bmi2 = bmica1cu1ator(m2,h2);

    let merithigherBMI = bmi1 > bmi2;

    let result = testdata[0][2] + "'s BMI is " + bmi1.toFixed(2)  + " and " + testdata[1][2] + "'s BMI is " + bmi2.toFixed(2)  + ". Hence " + " the assumption of " + testdata[0][2] + " having a higher BMI is " + merithigherBMI + "." 

    return result;
}

function bmica1cu1ator(mass, height){
    bmi = mass/Math.pow(height,2)

    return bmi;
}

let testdata1 = [[78, 1.69, "Merit"],[92, 1.95, "NJ"]];
let testdata2 = [[85, 1.76, "Merit"],[95, 1.88, "NJ"]];

console.log(comparebmi(testdata1));
console.log(comparebmi(testdata2));