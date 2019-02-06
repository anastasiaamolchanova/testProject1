// var question;
// var year = prompt("Year of my birth", "");

// question = (year == 1997) ? alert("yes") :
//     (year < 1997) ? alert("too early") :
//     (year > 1997) ? alert("too late") : 
//     alert("change number");

// var myName;
// var firstName = "Anastasiia"; 
// var guess = prompt("Guess my name", "");

// myName = (guess == firstName) ? alert("Fuck yea") :
//     alert("Wrong name, my name is " + firstName);

// var answer = "ECMAScript";
// var question = prompt("Official name of JS?");
//     (question == answer) ? alert("Yea true") :
//      alert("No, official name is "+ answer);

// var value = prompt("Type number", 0);

// (value > 0) ? alert(1) :
// (value < 0) ? alert(-1) :
// alert(0)

// var password;
// var login = prompt("Type your name"); 

//     (login == null) ? alert("Enter cancelled") :
//      (login != null && login != "admin") ? alert("Bye") :
//       password = prompt("Password") && (password == "12345") ? alert("wellcome") :
//       alert("Wrong password");

// result = (a + b <4) ? "not enough" : "enough";

// var age = 20;
// if (age >= 14 && age <= 90) {
//     alert("Adult but not old");
// } 

// var age = 20;
// if (age < 14 || age > 90) {
//     alert("Too young");
// } else {
//     alert("Nice");
// }

// var i = 0;
// while (i < 3) {
//   alert( i );
//   i++;
// }

// var i = 3;
// do {
//     alert(i);
//     i++;
// } while (i<8);

// var i;
// for (i=1; i<5; i++) {
//     alert(i);
// }

// var i = 0;

// for (; i < 3; i++) {
//   alert( i );
// }

// var i;
// for (;;) {
//     alert(i); 
// }

// for (var i = 0; i < 11; i++) {
//     if (i % 3 == 0) continue;
//     alert(i);
// }

//         var input = prompt("Type your name"); ; 
//         var i = prompt(""); 
//         var j = prompt("");
//         if (i>5 || j>5 || !input) {
//             break outer;
//         }else {
//             alert("OK");
//         }
        
// alert("Bye")


// var a = 1;
// while (a < 10) {
//     alert(a);
//     a++;
// }

// var a = 1;
// do {
//     alert(a);
//     a++;
// } while (a < 10);

// var a;
// for (a = 0; a < 10; a++) {
//     alert(a);
// }

// var i = 0;
// while (i++ < 3) alert(i);

// var typeNumber; 
// do {
//     typeNumber = prompt("Please, type number > 100", 0);  
// } while (typeNumber <= 100 && typeNumber != null) alert("Good");

// cycle:
// for (var i = 2; i < 10; i++) {
//     for (var j = 2; j<i; j++) {
// if (i % j == 0) continue cycle; 
//     }
// alert(i);
// }

// var browser = prompt("Type your browser name");
// if (browser == "IE") {
//     alert("IE"); 
// }
// else if (browser == "Chrome" ||browser == "Opera" || browser == "Safari" ) {
//     alert("Good browser");
// } else {
//     alert("Unknown browser");
// }


// var a = prompt("a?", "");
// switch (a) {
//     case "0": 
//     alert(0);
//     break; 

//     case "1":
//     alert("1");
//     break;

//     case "2":
//     case "3":
//     alert("2, 3");
//     break;
    

//     case null:
//     alert("Bye");
//     break;

//     default:
//     alert("Unknown");
//     break;
// }

// function count() {
//     for (var i = 0; i<5; i++) {
//         var a = i*2;
//     }
//     alert(i);
//     alert(a);
// }
// count(); 

// var a = prompt("2+2-?", "");

// switch (a) {
//     case "1":
//     case "2": 
//     case "3":
//         alert("Not enough");
//         break;
//     case "4":
//     alert("Exactly!");
//     break;
// }

// var arr = ['Apple', 'Orange', 'Pear'];
// var i;
// var lastItem;

// for(i=0; i<arr.length; i++){
//     lastItem = arr.length-1;
//     // console.log("last item ---" + arr[lastItem]);
//     // arr[3] = "Banana";
//     // console.log( arr[lastItem] );
//     arr.splice(1,1);
//     console.log( arr );
// }

var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log( matrix[1][0] ); 

   