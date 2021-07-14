// Challenge 1: Your Age in Days
function ageInDays(){
var birthYear = prompt('Ju lutem shtypni vitin e lindjes!');
var ageInDaysZ = (2020 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('Ti je '+ ageInDaysZ + ' dite i/e vjeter.');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
console.log(ageInDaysZ);

}
function reset(){
    document.getElementById('ageInDays').remove();
}
