// let a = 121;
// console.log(a);

// console object
// log esa method
// console degan objectni log degan  methodi

// function decloration
// function jamshid() {
//   console.log("jamshid");
// }
// console.log(lorem);

// funksiyalar qachonki chaqirilgan holatda ishlidi
// agar funksiyani console log bilan chaqirilsa u funkisiyani toliq chiqarib beradi; bu notogri method hisoblanadi ;
// funkisyani ya'ni jamshidni ozini bracket bilan chaqirib va scope ochib slash qoyih kerak sababi js single thread hisoblandi;
// decloration functionni yaratishdan oldin ham chaqirsa boladi; bunaqa ishlatishni tavsiya qilinmidi;

// jamshid();//////////////////////////////

// console.log("javohir");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// funkiyaga argument berish

// let a = 90;
// function jamshid(num) //num avariable a ga teng emas qiymatiga teng yani 90 ga
// funksiyada berilgan variabller faqat qiymatni oladi
// let num=90
// {
//   console.log(num + 90);
// }  //tepadigi qismi parametr qeyiladi

// jamshid(a);  //pasda berilgan qism argument deyiladi

// argumentga berilgan qiymatlar order bilan joylanadi
// function jamshid(num,num2,num3) {
//  console.log(num2,num3);
// }
// console.log(a,"salom",66);
//salom bu yerda num2 ga teng  va num3 66 ga teng;

// let a=90;
// function jamshid(a) {
//     a+=1;
//     console.log(a);
// }
// jamshid(a);
// console.log(a);
//globaldagi a variable bilan funksiyadagi a bitta narsa emas;
// va bu faqat primitive qiymatlarda

// let b=90;
// function jamshid(a) {
//     a+=1;
//     console.log(a);
// }
// jamshid(b);
// console.log(b);

// jamshid bu faqat value ni oladi funksiyadagi;

// function jamshid(a) {
//  a+=1;
//  console.log(a);

// }
// jamshid();
// type coversionda undefinedga qiymat qoshilsa NAN chiqaradi
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function return
/////////////////////////////
// function x(a,b){
// console.log(a+b);
// return a+b;
// return faqat chaqirilgan joyga return qiladi
// console log dasturlashda faqat test qilish uchun ishlatiladi

// }
// let result=x(10,20);
// console.log(result);
// shuni ozini console logni ozida ishlasa ham boladi
// console.log(x(10,20));
// shu usul bilan

//////////////////////////////////////////////////////////////

// function x(a, b) {
//   if ((a + b) % 2 == 0) {
//     return "juft";
//   }
//   return "toq";
// }
// console.log(x(10,20));
// console.log(x(10,21));
// console.log(x(14,23));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function x(){

// }
// console.log(x());

// undefined berradi
// funksiyani ichida qiymat bolmasa ham ozi return qiladi
//return yozmasak ham return qiladi

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function expression
///////////////////////////////

// function expressionni qolganlaridan farqi hoistingdan qochish
// qolganlari  return parametr argument hammasi bir xil ishlidi
// buni farqi biz buni variable elon qilishdan tepada ishlatolmimiz
// let x= function(){

// }
// x();
// expressiondan yozish maqsad hoistingdan qoshish

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Javascriptda 4 ta scope bor
// ///////////////////////////////

// Global scope;
// Local/Function Scope
// Block scope
// Lexical scope
//////////////////////////////////
// Global scope bu---1. dasturimizning eng boshida, funksiya va boshqa ifodalarimizdan tashqari joy.
// 2. kalit so’zsiz yozib ketish ham global scopega borib tushadi. ! bu yomon
//////////////////////////////////
// Local Scope bu--funksiya ichi
//////////////////////////////////
//Block scope--for, if, {} lar ichi
//////////////////////////////////
// Lexical scope--o’zgaruvchi va functionlar e’lon qilingan joy
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// returndan keyin kod ishlamidi //return funksiyani tugatadi va 1 marta ishlidi
// return fuctionni ichidagi scopedagi variableni chaqirilgan joydagi scopega chiqaradi
// console log dasturlashda faqat test qilish uchun ishlatiladi
// undefined = ozgaruvchi elon qilinganda lekin qiymat berilmaganda undefined chiqaradi
// dead zone =variable elon qilingan qatordan tepadagi qator dead zone deyiladi
// dasturlar 3 turga bolinadi chiziqli funksiya yonaltirilgan  va obyektga yonatilgan
// funksiya 1 ta kodni qayta qayta ishlatish uchun ishlatiladi mixinga oxhsab

// zerkalniy  number
/////////////////////
// function palendromNumber(number) {
//   if (typeof number != "number") {
//     return "number emas";
//   }
//   let last = number % 10;
//   let mid = ((number - last) % 100) / 10;
//   let first = parseInt(number / 100);

//   let result = last * 100 + mid * 10 + first;
//   if (result == number) {
//     return "palendrom";
//   }
//   return "palendrom emas";
// }
// let result = palendromNumber(121);
// console.log(result);

/////////////////////////////////////////
// stringdan raqamlarni ajratib olish

// let str = "ais2df1gh3k1321f67";
// function parseNumber(value) {
//   let a = "";
//   for (let i = 0; i < value.length; i++) {
//     if (parseInt(value[i])) {
//       console.log(value[i]);
//     }

//     // console.log(value[i]);
//   }
// }

// let result = parseNumber(str);




//  let str = "ais2df1gh3k1321f67";
// function parseNumber(value) {
//   let a = "";
//   for (let i = 0; i < value.length; i++) {
    
//       let num= parseInt(value[i]);
//       if (num) {
//         a+= "-----"+num
//       }

//     // console.log(value[i]);
//   }
//   return a;
// }

// let result = parseNumber(str);
// console.log(result);
