"use strict";
// alert("hello world")
// let surname="test"
// alert(surname)
// let person=prompt("Please enter your name")
// console.log(person);
// alert(person)
// if (person=="") {
//     console.log("invalid");
// }
// else{
//     console.log(person);
// }
// let elem=confirm("Press a button!")
// console.log(elem);
// let stu1={
//     id:1,
//     name:"A",
//     surname:"Aa",
//     age:20
// }
// let stu2={
//     id:2,
//     name:"B",
//     surname:"Bb",
//     age:21
// }
// let stu3={
//     id:3,
//     name:"C",
//     surname:"Cc",
//     age:22
// }
// let stu4={
//     id:4,
//     name:"D",
//     surname:"Dd",
//     age:23
// }
// let result=stu4.name+" "+stu4.surname
// console.log(result);
// const students=[stu1,stu2,stu3,stu4]
// for (let i = 0; i < students.length; i++) {
//     let result=students[i].name+" "+students[i].surname;
//     console.log(result);
// }
// let sumAge=0;
// for (let i = 0; i < students.length; i++) {
//     sumAge+=students[i].age;    
// }
// let averageAges=sumAge/students.length
// console.log(sumAge);
// console.log(averageAges);
// if (averageAges<50) {
//     console.log("Young");
// }
// else{
//     console.log("old");
// }

// const elemss=[1,3,5,7,8,9]
// for(const item of elemss){
//     console.log(item);
// }
// let stu1={
//     id:1,
//     name:"A",
//     surname:"Aa",
//     age:20
// }
// let stu2={
//     id:2,
//     name:"B",
//     surname:"Bb",
//     age:21
// }
// let stu3={
//     id:3,
//     name:"C",
//     surname:"Cc",
//     age:22
// }
// let stu4={
//     id:4,
//     name:"D",
//     surname:"Dd",
//     age:23
// }
// const students=[stu1,stu2,stu3,stu4]
// for (const item of students) {
//     console.log(item.name);   
// }
// const product={
//     name:"Samsung",
//     price:500
// }
// for (const key in product) {
//     console.log(key+"-"+product[key]);
// }

// let stu1={
//     id:1,
//     name:"A",
//     surname:"Aa",
//     age:20
// }
// let stu2={
//     id:2,
//     name:"B",
//     surname:"Bb",
//     age:21
// }
// let stu3={
//     id:3,
//     name:"C",
//     surname:"Cc",
//     age:22
// }
// let stu4={
//     id:4,
//     name:"D",
//     surname:"Dd",
//     age:23
// }
// let result=stu4.name+" "+stu4.surname
// console.log(result);
// const students=[stu1,stu2,stu3,stu4]
// for (let i = 0; i < students.length; i++) {
//     let result=students[i].name+" "+students[i].surname;
//     console.log(result);
// }
// let sumAge=0;
// for (let i = 0; i < students.length; i++) {
//     sumAge+=students[i].age;    
// }
// let averageAges=sumAge/students.length
// console.log(sumAge);
// console.log(averageAges);
// if (averageAges<50) {
//     console.log("Young");
// }
// else{
//     console.log("old");
// }

// let stu1={
//     id:1,
//     name:"A",
//     surname:"Aa",
//     age:20
// }
// let stu2={
//     id:2,
//     name:"B",
//     surname:"Bb",
//     age:21
// }
// let stu3={
//     id:3,
//     name:"C",
//     surname:"Cc",
//     age:22
// }
// let stu4={
//     id:4,
//     name:"D",
//     surname:"Dd",
//     age:23
// }
// const students=[stu1,stu2,stu3,stu4]
// for (const stu of students) {
//     for (const key in stu) {
//         if (key=="name") {
//             let objectData=`${key} - ${stu[key]}`;
//             console.log(objectData);
//         }
//     }
// }
 
// function showText() {
//     console.log("tested");
// }
// showText()
// function showText() {
//     let isActive=true;
//     if (isActive) {
//         return;
//     }
//     return ("tested");
// }
// let result=showText() 
// console.log(result);

// function showName(text) {
//     console.log(text);
// }
// showName("Semed")

// let name=prompt("Add your name:")
// function showName(text) {
//     console.log(name);
// }
// showName(name)

// function showName(name,surname,address,age) {
//     const fullData=`${name} ${surname} ${address} ${age+40}`
//     console.log(fullData);
// }
// showName("Nurane","Ismayilzade","Ramana",21)

// function sum(num=100) {
//     console.log(num+200);
// }
// sum()
// sum(1)


// let stu1={
//     id:1,
//     name:"A",
//     surname:"Aa",
//     age:20
// }
// let stu2={
//     id:2,
//     name:"B",
//     surname:"Bb",
//     age:21
// }
// let stu3={
//     id:3,
//     name:"C",
//     surname:"Cc",
//     age:22
// }
// let stu4={
//     id:4,
//     name:"D",
//     surname:"Dd",
//     age:23
// }
// const students=[stu1,stu2,stu3,stu4]
// function getStudentsByAge(students) {
//     let countByAge=0;
//     for (const stu of students) {
//         if (stu.age>20) {
//             countByAge+=1;
//             console.log(stu.name);      
//         }
//     }
//     console.log(countByAge);
// }
// function getStudentsByAge(students) {
//     let countByAge=0;
//     for (const stu of students) {
//         if (stu.age>20) {
//             countByAge+=1;
//         }
//     }
//     return (countByAge**=2);
// }
// console.log(getStudentsByAge(students));

// let status=true;
// if(status){
//     var elem=100;
// }

// function test() {
//     var surname="test";
// }
// test()
// console.log(elem);
// console.log(surname);




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   TASKLAR   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.
// function devidedCheck(value) {
//     if (value%3==0 && value%7==0) {
//         console.log("Bu eded 3-e ve 7-e qaliqsiz bolunur.");
//     }
//     else{
//         console.log("Bu eded 3 ve 7-e qaliqsiz bolunmur");
//     }
// }
// devidedCheck(21)
// devidedCheck(22)




// 2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 
// function numberFactorial(value) {
//     let hasil = 1;
//     for (let i = 1; i <= value; i++) {
//         hasil *= i;
//     }
//     return hasil;
// }
// let result = numberFactorial(6);
// console.log(result);




// 3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.
// let numbers=[2,4,5,7,8,10]
// function findArrayElements(numbers) {
//     let cem=0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i]%2==0) {
//             cem+=numbers[i]**2;
//         }        
//     }
//     console.log(`cem: ${cem}`);
// }
// findArrayElements(numbers)


// 4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e,
//  ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 
// function checkMailPassword(mail,password) {    
//     if (mail=="cavid@code.edu.az" && password=="12345") {
//         console.log("Girish olundu");
//     }
//     else{
//         console.log("Mail ve yaxud password sehvdir.");
//     }
// }
// checkMailPassword("cavid@code.edu.az","12345")
// checkMailPassword("cavid@code.edu.az","123n45")



// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.
// function singularNumbersSum(arrays) {
//     let cem=0;
//     for (const item of arrays) {
//         if (item%2!=0) {
//             cem+=item;
//         }
//     }
//     return cem;
// }
// let result=singularNumbersSum([2,4,1,6,7,9])
// console.log(result);



// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.
// function evenNumbersCount(arrays) {
//     let count=0;
//     for (const item of arrays) {
//         if (item%2==0) {
//             count+=1
//         }
//     }
//     return count;
// }
// let result=evenNumbersCount([2,4,1,3,5,19,22,24,26])
// console.log(result);