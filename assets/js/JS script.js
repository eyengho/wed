let counter = 20;

console.log(++counter); //

let a = 7;
a++; //same as a = a + 1
++a; //same as line 6
console.log(a); //9
console.log(a); //9

a += 7;
console.log(a); //return 16
let cartItem = 10;
//Product added to cart below
cartItem++;
console.log("You have ", cartItem, " in your cart");
let string1 = "You have ";
let cartOperation = string1 + cartItem + " in your cart";
document.getElementById("counter_div").innerHTML = cartOperation;

//Remove items from cart
cartItem--;
document.getElementById("removed").innerHTML = cartItem;

let str1 = "Hello Paul, ";
str1 += " how are you";
str1 = " doint?";
console.log(str1);
let x = 1;
let y = "2";
let c = x + y;
console.log("c  is:",c);

//comparison operators
let t ="5";
let u =5;
console.log(typeof t);//string
console.log(typeof u);//number
console.log(t == u);//equality returns true
console.log(t === u);//strict equality returns false
let score1 = 34,
    score2=  45
    score3=  56;


    console.log(score1 >score2); //fasle
    console.log(score1 >=score2); //fasle
    console.log(score1 <= score2);//true 
    //Tenartry operator
   // let user;
   // const Role =user? "Admin" : "Guest";
  //  console.log(Role);

  //  let age = prompt("enter your age",18);
  //  console.log("your age is "+ age + "years old");
   // crossOriginIsolated.log(typeof age);

    let logout =confirm("Are you Sure u are 18?");
   // console,log(logout);

   // (logout? "logged out":"logged in");

   // if (logut){
     //   alert("Successfully logged out");
   // }else{
   //     alert("cancelled.......");
   // }


