/*let names = ['I', 'F', 'T', 'R', 'H',];
for (i = 0; i < names.length; i++) {
    console.log(names[i] + ' text');
}*/

/*let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
        console.log(nums[i]);
    } else {
        console.log(nums[i]  + "Нечетное число");
    }

}*/

/*let a = document.createElement('div');
let b = document.createElement('div');
let c = document.createElement('div');
let body = document.body;
body.append(a);
body.append(b);
body.append(c);
a.classList.add('a');
b.classList.add('a');
c.classList.add('a');
let el = document.querySelectorAll('.a');
console.log(el);
for (i = 0; i < el.length; i++) {
    el[i].style.width = "100px";
    el[i].style.height = "100px";
    el[i].style.backgroundColor = "red";
}*/

/*let arr = [];
for (let i = 1; i < 15; i++) {
    if (i % 2 != 0) {
        arr.push(i);
    }
   
}
console.log(arr);*/
/*
//Цикл for
let a_1 = [2, 5, 7, 9, 12, 15];
let sum_1 = 0;
for (i = 0; i < a_1.length; i++) {
    sum_1 = sum_1 + a_1[i];
 }
console.log(sum_1);


//Цикл while
let a_2 = [2, 5, 7, 9, 12, 15]
let res_2 = 0;
let nub_2 = 0;
while(nub_2 < a_2.length) {
    res_2 = res_2 + a_2[nub_2]
    nub_2++;
}
console.log(res_2);*/


//Function

/*let b  = a (1, 2, 3);
let c = a (1, 2);
function a (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}*/

/*function fnname (a) {
    console.log(a + 5);
}
fnname (5);*/

/*let obj = {
    name: "Anna",
    age: 26,
    sayHi: function () {
        alert("Hi");
    }
}*/
//obj.sayHi();

//let arr = [1, 2, function () {alert("text")}, 3];
//arr[2]();


/*function a (a) {
    for (i = 0; i < a; i++)  {
        console.log(i);
    }
}
a (50);*/

//Задание на 19.05
//Задача 1 
let arr = [5, 2, 4, 8, 9, 1, 6, 12];
function sumOfArray (arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log( '#1', sumOfArray (arr));

//Задача 2 через forEach функцию
let  nums = [5, 2, 4, 8, 9, 1, 6, 12];
function getMaxOutOfAnNums (nums) {
    let maxNumber = -Infinity;
    nums.forEach(number => {
        maxNumber =  number > maxNumber ? number :  maxNumber; 
    });
    console.log('#2', maxNumber);
}
getMaxOutOfAnNums (nums);

//Задача 2 через Math функцию
let numb = [5, 2, 4, 8, 9, 1, 6, 12];
console.log ('#2', Math.max (...numb));

//Задача 2 через for
let array =  [5, 2, 4, 8, 9, 1, 6, 12];
function biggestNumberInArray(arr) {
    let maxNumber;
    for(let i = 0; i < arr.length; i++){
        if(!maxNumber){ 
            maxNumber = arr[i]
        }
        if(arr[i] > maxNumber){
            maxNumber = arr[i];
        }
    }
    return maxNumber
}
console.log('#2', biggestNumberInArray(array));

//Задача 3
let a = [1, 2, 4, 5, 6, 8, 9, 11, 12, 14, 15, 13];
function f3 (arr) {
    let b = 0;
    for (let i = 0; i < arr.length; i++ ) {
        if ( arr[i] % 2 == 0) {
            b++;
        }
    }
    return b;
}
console.log('#3', f3 (a));

//Задача 4
let f = [5, 4, 8, 9, 10, 12];
function f4 ( arr, elem) {
    for ( let i = 0; i < arr.length; i++) {
        if (arr [i] === elem) {
            return true;
        }
    }
    return false;
}
console.log('#4', f4 (f, 8));

//Задача 5
let x = [5, 4, 8, 9, 10, 12];
function f5 (arr) {
    let x_sum_2x = [];
    for (i = 0; i < arr.length; i++) {
        x_sum_2x.push(arr[i] * 2);
    }
    return x_sum_2x;
}
console.log('#5', f5 (x));

//Задание нв 22.05
//Задача 6
let str = "Hello, world!";
function f6 (arr) {
    let reverse = "";
    for ( i = arr.length - 1; i >= 0; i--) {
        reverse += arr [i];
    }
    return reverse;
}
console.log('#6', f6 (str));

//Задача 7
let s = [2, 4, 6, 8, 10];
function f7 (arr) {
    let res_s = [];
     for ( i = 0; i < arr.length; i++) {
      res_s.push(arr [i] * arr [i]);
     }
     return res_s;  
}
console.log('#7', f7 (s));

//Задача 8
let k = [4, 2, 9, 1, 7];
function f8 (arr) {
    let max, min;
    max = -Infinity;
    min = Infinity;
    for (i = 0; i < arr.length; i+= 1) {
        if (arr [i] > max) {
            max = arr [i]; 
        }
        if (arr [i] < min) {
            min = arr [i];
        }
    }
    return {max, min};
}
console.log('#8', f8 (k));

//Задача 9
let l = [2, 8, 7, 9, 6];
let h = [1, 4 ,8 ,7 ,6];
function f9 (array1, array2)  {
    let res = [];
    for (i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            res.push(array1 [i]);
        }
    }
    return res;
}
console.log('#9', f9 (l, h));