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



// function return
function x(a,b){
// console.log(a+b);    
return a+b
// return faqat chaqirilgan joyga retur qiladi
}
let result=x(a+b);
console.log(result);






// console log dasturlashda faqat test qilish uchun ishlatiladi
// undefined = ozgaruvchi elon qilinganda lekin qiymat berilmaganda undefined chiqaradi
// dead zone =variable elon qilingan qatordan tepadagi qator dead zone deyiladi
// dasturlar 3 turga bolinadi chiziqli funksiya yonaltirilgan  va obyektga yonatilgan
// funksiya 1 ta kodni qayta qayta ishlatish uchun ishlatiladi mixinga oxhsab
